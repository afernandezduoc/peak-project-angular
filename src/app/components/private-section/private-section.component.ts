import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-section',
  templateUrl: './private-section.component.html',
  styleUrls: ['./private-section.component.css']
})
export class PrivateSectionComponent {
  constructor(private router: Router) {}

  viewPdf(pdfUrl: string) {
    this.router.navigate(['/pdf-viewer'], { queryParams: { pdfUrl: pdfUrl } });
  }

  logout() {
    localStorage.removeItem('authenticated');
    this.router.navigate(['/']);
  }
}
