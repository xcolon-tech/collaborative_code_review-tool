import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  profileForm!: FormGroup;
  accountForm!: FormGroup;
  profileData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  message: string = '';

  settings = {
    allowCollaboration: false,
    allowCommit: false,
    allowReview: false
  };

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.accountForm = this.fb.group({
      collaborate: [false],
      commit: [false],
      review: [false]
    });
  }

  onSubmitProfile() {
    console.log(this.profileForm.value);
  }

  onDeleteAccount() {
    console.log(this.accountForm.value);
  }

  updateProfile() {
    if (this.profileData.password !== this.profileData.confirmPassword) {
      this.message = 'Passwords do not match.';
      return;
    }

    this.accountService.updateProfile(this.profileData).subscribe(
      response => {
        this.message = 'Profile updated successfully!';
      },
      error => {
        console.error('Error updating profile:', error);
        this.message = 'Failed to update profile.';
      }
    );
  }

  updateSettings() {
    this.accountService.updateAccountSettings(this.settings).subscribe(
      response => {
        this.message = 'Settings updated successfully!';
      },
      error => {
        console.error('Error updating settings:', error);
        this.message = 'Failed to update settings.';
      }
    );
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.accountService.deleteAccount().subscribe(
        response => {
          this.message = 'Account deleted successfully!';
        },
        error => {
          console.error('Error deleting account:', error);
          this.message = 'Failed to delete account.';
        }
      );
    }
  }
}
