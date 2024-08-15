import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private apiUrl = '<url>';
  private apiKey = '<key>';

  constructor(private http: HttpClient) { }

  reviewCode(codeSnippet: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an AI code reviewer. Please analyze and review the following code snippet for best practices, bugs, and possible improvements.'
        },
        {
          role: 'user',
          content: codeSnippet
        }
      ],
      max_tokens: 150,
      temperature: 0.7
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
