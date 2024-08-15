import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://api.your-backend.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  // Add or update a project
  saveProject(project: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (project.id) {
      // If project ID exists, update the project
      return this.http.put(`${this.apiUrl}/projects/${project.id}`, project, { headers });
    } else {
      // Otherwise, add a new project
      return this.http.post(`${this.apiUrl}/projects`, project, { headers });
    }
  }

  // Delete a project
  deleteProject(projectId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/projects/${projectId}`);
  }

  // Add or update a member
  saveMember(member: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (member.id) {
      // If member ID exists, update the member
      return this.http.put(`${this.apiUrl}/members/${member.id}`, member, { headers });
    } else {
      // Otherwise, add a new member
      return this.http.post(`${this.apiUrl}/members`, member, { headers });
    }
  }

  // Delete a member
  deleteMember(memberId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/members/${memberId}`);
  }
}
