import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../service/voyage.service';

@Component({
  selector: 'app-btn-supprimer',
  standalone: true,
  imports: [],
  templateUrl: './btn-supprimer.component.html',
  styleUrl: './btn-supprimer.component.scss'
})
export class BtnSupprimerComponent {
  @Input() voyageId: string | undefined;
  @Output() voyageSupprime = new EventEmitter<void>(); 

  constructor(
    private voyageService: VoyageService,
    private router: Router
  ) {}

  deleteVoyage(): void {
    if (this.voyageId && confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(this.voyageId); 
      this.voyageSupprime.emit();
      this.router.navigate(['/home']); 
    }
  }
}