import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  pdfUrl: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(params['pdfUrl']);
    });
  }
}
