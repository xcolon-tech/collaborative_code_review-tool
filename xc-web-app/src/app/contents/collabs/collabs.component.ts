import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollabService } from './collab.service';

@Component({
  selector: 'app-collabs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './collabs.component.html',
  styleUrl: './collabs.component.css'
})
export class CollabsComponent implements OnInit {
  collabForm!: FormGroup;
  projects: any[] = []; // List of projects
  selectedProject: string = '';
  selectedMembers: string[] = [];
  members: any[] = []; // List of all members
  collaborationDetails: any = null;

  constructor(private fb: FormBuilder, private collaborationService: CollabService) {}

  ngOnInit() {
    this.collabForm = this.fb.group({
      project: ['', Validators.required],
      member1: ['', Validators.required],
      member2: ['']
    });
    this.fetchProjects();
    this.fetchMembers();
  }

  onSubmitCollab() {
    console.log(this.collabForm.value);
  }

  fetchProjects() {
    // Fetch projects from the server (implement this method as needed)
    // Example: this.projects = [{ id: '1', name: 'Project 1' }, { id: '2', name: 'Project 2' }];
  }

  fetchMembers() {
    // Fetch members from the server (implement this method as needed)
    // Example: this.members = [{ id: 'm1', name: 'Member 1' }, { id: 'm2', name: 'Member 2' }];
  }

  addCollaboration() {
    if (this.selectedProject && this.selectedMembers.length > 0) {
      this.collaborationService.addMembersToCollaboration(this.selectedProject, this.selectedMembers).subscribe(
        response => {
          console.log('Collaboration added successfully:', response);
          this.selectedMembers = []; // Reset selected members
          this.viewCollaboration();
        },
        error => {
          console.error('Error adding collaboration:', error);
        }
      );
    } else {
      console.error('Please select a project and at least one member.');
    }
  }

  viewCollaboration() {
    if (this.selectedProject) {
      this.collaborationService.getCollaborationByProject(this.selectedProject).subscribe(
        response => {
          this.collaborationDetails = response;
        },
        error => {
          console.error('Error fetching collaboration details:', error);
        }
      );
    } else {
      console.error('Please select a project to view its collaboration.');
    }
  }
}
