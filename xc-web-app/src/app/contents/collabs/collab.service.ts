import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  private apiUrl = 'https://api.your-backend.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  // Add members to a collaboration
  addMembersToCollaboration(projectId: string, members: string[]): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { projectId, members };
    return this.http.post(`${this.apiUrl}/projects/${projectId}/collaborations`, body, { headers });
  }

  // Get collaboration details by project ID
  getCollaborationByProject(projectId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/collaborations`);
  }
}
