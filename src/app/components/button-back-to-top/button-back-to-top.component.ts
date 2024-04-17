import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './button-back-to-top.component.html',
  styleUrl: './button-back-to-top.component.scss',
})
export class ButtonBackToTopComponent {
  isBackToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowsScroll() {
    if (window.scrollY > 400) {
      this.isBackToTop = true;
    } else {
      this.isBackToTop = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
