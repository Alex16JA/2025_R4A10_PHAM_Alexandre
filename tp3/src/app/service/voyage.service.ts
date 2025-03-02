import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyagesFromLocalStorage();
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find(voyage => voyage.id === id);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.saveVoyagesToLocalStorage();
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
    this.saveVoyagesToLocalStorage();
  }

  generateId(): string {
    return Math.random().toString().replace("0.", "");
  }

  private saveVoyagesToLocalStorage(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private loadVoyagesFromLocalStorage(): void {
    const voyages = localStorage.getItem('voyages');
    if (voyages) {
      this.voyages = JSON.parse(voyages);
    }
  }
}