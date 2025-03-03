import { Component } from '@angular/core';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { BtnSupprimerComponent } from '../btn-supprimer/btn-supprimer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SlicePipe, BtnSupprimerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  voyages: Voyage[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = 0;
  Math = Math;

  constructor(private voyageService: VoyageService) {
    this.actualiserVoyages();
  }

  actualiserVoyages(): void {
    this.voyages = this.voyageService.getVoyages();
    this.totalItems = this.voyages.length;
  }

  get pagination(): Voyage[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.voyages.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}