import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  uploadForm!: FormGroup;
  commitForm!: FormGroup;
  selectedProject: string = '';
  selectedFile: File | null = null;
  message: string = '';
  collaborationDetails: any = null;

  constructor(private fb: FormBuilder, private reviewService: ReviewService) {}

  ngOnInit() {
    this.uploadForm = this.fb.group({
      selectedProject: ['', Validators.required],
      file: ['', Validators.required]
    });

    this.commitForm = this.fb.group({
      commitProject: ['', Validators.required]
    });
  }

  onSubmitUpload() {
    console.log(this.uploadForm.value);
  }

  onSubmitCommit() {
    console.log(this.commitForm.value);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedProject && this.selectedFile) {
      this.reviewService.uploadFileToProject(this.selectedProject, this.selectedFile).subscribe(
        response => {
          this.message = 'File uploaded successfully!';
        },
        error => {
          console.error('Error uploading file:', error);
          this.message = 'Failed to upload file.';
        }
      );
    } else {
      this.message = 'Please select a project and a file to upload.';
    }
  }

  commitProject() {
    if (this.selectedProject) {
      this.reviewService.commitProject(this.selectedProject).subscribe(
        response => {
          this.message = 'Project committed successfully!';
        },
        error => {
          console.error('Error committing project:', error);
          this.message = 'Failed to commit project.';
        }
      );
    } else {
      this.message = 'Please select a project to commit.';
    }
  }

  reviewCollaboration() {
    if (this.selectedProject) {
      this.reviewService.reviewCollaboration(this.selectedProject).subscribe(
        response => {
          this.collaborationDetails = response;
        },
        error => {
          console.error('Error reviewing collaboration:', error);
          this.message = 'Failed to retrieve collaboration details.';
        }
      );
    } else {
      this.message = 'Please select a project to review collaboration.';
    }
  }
}
