import { Component } from '@angular/core';
import { DefaultHeaderComponent } from '../default-header/default-header.component';
import { LinkedinIconComponent } from '../linkedin-icon/linkedin-icon.component';
import { GithubIconComponent } from '../github-icon/github-icon.component';
import { WhatsappIconComponent } from '../whatsapp-icon/whatsapp-icon.component';
import { SectionProjectsComponent } from '../section-projects/section-projects.component';
import { ContainerProjectComponent } from '../container-project/container-project.component';
import projectsData from '../../../assets/data/projects.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DefaultHeaderComponent,
    LinkedinIconComponent,
    GithubIconComponent,
    WhatsappIconComponent,
    SectionProjectsComponent,
    ContainerProjectComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allProjects = projectsData.projects;
}
