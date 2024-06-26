import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['projects']);
  }
}
