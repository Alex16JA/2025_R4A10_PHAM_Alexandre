import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyagesFromLocalStorage();
  
    if (this.voyages.length === 0) {
      this.voyages = [
        {
          id: this.generateId(),
          destination: 'Paris',
          description: 'La ville des lumières et de la romance.',
          prix: 1200
        },
        {
          id: this.generateId(),
          destination: 'Tokyo',
          description: 'Découvrez la culture japonaise moderne et traditionnelle.',
          prix: 2500
        },
        {
          id: this.generateId(),
          destination: 'New York',
          description: 'La ville qui ne dort jamais.',
          prix: 1800
        },
        {
          id: this.generateId(),
          destination: 'test1',
          description: 'Test 1',
          prix: 1800
        }
      ];
      this.saveVoyagesToLocalStorage();
    }
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