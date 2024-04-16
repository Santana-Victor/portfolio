import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-project',
  standalone: true,
  imports: [],
  templateUrl: './container-project.component.html',
  styleUrl: './container-project.component.scss',
})
export class ContainerProjectComponent {
  @Input() linkProject: string = '';
  @Input() sourceImage: string = '';
  @Input() alternativeText: string = '';
  @Input() titleProject: string = '';
  @Input() primaryText: string = '';
  @Input() secondaryText: string = '';
}
