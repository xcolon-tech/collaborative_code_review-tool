import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  projects: any[] = [];
  activityFeeds: any = {};

  constructor(private projectService: HomeService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  // Fetch all projects
  fetchProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.projects = data;
        this.projects.forEach(project => {
          this.fetchActivityFeeds(project.id);
        });
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }

  // Fetch activity feeds for a project
  fetchActivityFeeds(projectId: string): void {
    this.projectService.getActivityFeeds(projectId).subscribe(
      (data) => {
        this.activityFeeds[projectId] = data;
      },
      (error) => {
        console.error('Error fetching activity feeds', error);
      }
    );
  }
}
