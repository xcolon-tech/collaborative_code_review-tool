import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiUrl = 'https://your-api-url.com/logout';  // Replace with your actual API URL

  constructor(private http: HttpClient, private router: Router) { }

  logout() {
    // Optionally, notify the server to invalidate the token
    this.http.post(this.apiUrl, {}).subscribe({
      next: () => {
        this.performLogout();
      },
      error: (error) => {
        console.error('Logout failed:', error);
        // Still perform the logout on client side even if the server fails
        this.performLogout();
      }
    });
  }

  private performLogout() {
    // Remove token from local storage or session storage
    localStorage.removeItem('authToken');

    // Optionally, navigate to the login page
    this.router.navigate(['/login']);
  }
}
