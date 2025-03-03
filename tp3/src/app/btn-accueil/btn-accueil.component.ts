import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-accueil',
  standalone: true,
  imports: [],
  templateUrl: './btn-accueil.component.html',
  styleUrl: './btn-accueil.component.scss'
})
export class BtnAccueilComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}