import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';

@Component({
  selector: 'app-btn-supprimer',
  standalone: true,
  imports: [],
  templateUrl: './btn-supprimer.component.html',
  styleUrl: './btn-supprimer.component.scss'
})
export class BtnSupprimerComponent {
  voyage: Voyage | undefined;
  
    constructor(
      private route: ActivatedRoute,
      private voyageService: VoyageService,
      private router: Router
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.voyage = this.voyageService.getVoyageById(id);
      }
    }
  
    deleteVoyage(id: string | undefined): void {
      if (id && confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
        this.voyageService.deleteVoyage(id);
        this.router.navigate(['/home']);
      }
    }
}
