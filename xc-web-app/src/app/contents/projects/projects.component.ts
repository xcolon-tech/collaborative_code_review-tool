import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from './project.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements OnInit {
  projectForm!: FormGroup;
  deleteProjectForm!: FormGroup;
  memberForm!: FormGroup;
  deleteMemberForm!: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['', Validators.required]
    });

    this.deleteProjectForm = this.fb.group({
      projectTag: ['', Validators.required]
    });

    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.deleteMemberForm = this.fb.group({
      memberEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitProject() {
    console.log(this.projectForm.value);
  }

  onDeleteProject() {
    console.log(this.deleteProjectForm.value);
  }

  onSubmitMember() {
    console.log(this.memberForm.value);
  }

  onDeleteMember() {
    console.log(this.deleteMemberForm.value);
  }

  project = { id: '', name: '', description: '' };
  member = { id: '', name: '', email: '', password: '' };
  message = '';

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(
      response => {
        this.message = `Project ${this.project.id ? 'updated' : 'added'} successfully!`;
        this.project = { id: '', name: '', description: '' };
      },
      error => {
        console.error('Error:', error);
        this.message = 'An error occurred while saving the project.';
      }
    );
  }

  deleteProject() {
    if (this.project.id) {
      this.projectService.deleteProject(this.project.id).subscribe(
        response => {
          this.message = 'Project deleted successfully!';
          this.project = { id: '', name: '', description: '' };
        },
        error => {
          console.error('Error:', error);
          this.message = 'An error occurred while deleting the project.';
        }
      );
    } else {
      this.message = 'Please select a project to delete.';
    }
  }

  saveMember() {
    this.projectService.saveMember(this.member).subscribe(
      response => {
        this.message = `Member ${this.member.id ? 'updated' : 'added'} successfully!`;
        this.member = { id: '', name: '', email: '', password: '' };
      },
      error => {
        console.error('Error:', error);
        this.message = 'An error occurred while saving the member.';
      }
    );
  }

  deleteMember() {
    if (this.member.id) {
      this.projectService.deleteMember(this.member.id).subscribe(
        response => {
          this.message = 'Member deleted successfully!';
          this.member = { id: '', name: '', email: '', password: '' };
        },
        error => {
          console.error('Error:', error);
          this.message = 'An error occurred while deleting the member.';
        }
      );
    } else {
      this.message = 'Please select a member to delete.';
    }
  }
}
