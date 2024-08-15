import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'https://api.your-backend.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  // Method to get the list of all projects
  getAllProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  // Method to get the activity feeds for a specific project
  getActivityFeeds(projectId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/activities`);
  }
}
