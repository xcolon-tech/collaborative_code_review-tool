import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'https://api.your-backend.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  // Update user profile
  updateProfile(profileData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/user/profile`, profileData, { headers });
  }

  // Update account settings (allow collaboration, commit, review)
  updateAccountSettings(settings: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/user/settings`, settings, { headers });
  }

  // Delete user account
  deleteAccount(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/delete`);
  }
}
