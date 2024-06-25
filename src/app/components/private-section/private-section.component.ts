import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private-section',
  templateUrl: './private-section.component.html',
  styleUrls: ['./private-section.component.css']
})
export class PrivateSectionComponent {
  constructor(private authService: AuthService) {}

  viewPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }

  logout() {
    this.authService.logout();
    window.location.href = 'index.html';
  }
}
