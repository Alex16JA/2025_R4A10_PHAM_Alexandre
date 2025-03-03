import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BtnAccueilComponent } from '../btn-accueil/btn-accueil.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [BtnAccueilComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
