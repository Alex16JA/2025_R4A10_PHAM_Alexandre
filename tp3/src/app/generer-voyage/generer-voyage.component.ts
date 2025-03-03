import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data/data';

@Component({
  selector: 'app-generer-voyage',
  templateUrl: './generer-voyage.component.html',
  styleUrls: ['./generer-voyage.component.scss']
})
export class GenererVoyageComponent {
  genererVoyage: Voyage | null = null;

  constructor(private voyageService: VoyageService, private router: Router) { }

  generateVoyage(): void {
    const randomDestination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const randomDescription = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const randomPrix = PRIX[Math.floor(Math.random() * PRIX.length)];

    this.genererVoyage = {
      id: this.voyageService.generateId(),
      destination: randomDestination,
      description: randomDescription,
      prix: randomPrix
    };
  }

  confirmVoyage(): void {
    if (this.genererVoyage) {
      this.voyageService.addVoyage(this.genererVoyage);
      this.router.navigate(['/detail', this.genererVoyage.id]);
    }
  }
}