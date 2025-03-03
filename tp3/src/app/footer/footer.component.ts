import { Component } from '@angular/core';
import { NomSiteComponent } from '../nom-site/nom-site.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NomSiteComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  annee: number;

  constructor() {
    this.annee = new Date().getFullYear();
  }
}
