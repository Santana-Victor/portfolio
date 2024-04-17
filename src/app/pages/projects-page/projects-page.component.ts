import { Component } from '@angular/core';
import { DefaultHeaderComponent } from '../../components/default-header/default-header.component';
import { SectionProjectsComponent } from '../../components/section-projects/section-projects.component';
import { ContainerProjectComponent } from '../../components/container-project/container-project.component';
import projectsData from '../../../assets/data/projects.json';
import { ButtonBackToTopComponent } from '../../components/button-back-to-top/button-back-to-top.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    DefaultHeaderComponent,
    SectionProjectsComponent,
    ContainerProjectComponent,
    ButtonBackToTopComponent,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  allProjects = projectsData.projects;
}
