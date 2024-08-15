import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'https://api.your-backend.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  // Upload a file to a project
  uploadFileToProject(projectId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/projects/${projectId}/upload`, formData);
  }

  // Commit a project
  commitProject(projectId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/projects/${projectId}/commit`, {}, { headers });
  }

  // Review collaboration for a specific project
  reviewCollaboration(projectId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/review`);
  }
}
