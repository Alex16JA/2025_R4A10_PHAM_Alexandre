import { Component } from '@angular/core';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SlicePipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  voyages: Voyage[] = [];

  constructor(private voyageService: VoyageService) {
    this.voyages = this.voyageService.getVoyages();
  }

  deleteVoyage(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.voyages = this.voyageService.getVoyages();
    }
  }
}
