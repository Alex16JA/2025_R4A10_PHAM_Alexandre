import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { BtnSupprimerComponent } from '../btn-supprimer/btn-supprimer.component';

@Component({
  selector: 'app-detail-voyage',
  standalone: true,
  imports: [BtnSupprimerComponent],
  templateUrl: './detail-voyage.component.html',
  styleUrls: ['./detail-voyage.component.scss'],
})
export class DetailVoyageComponent {
  voyage: Voyage | undefined;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id);
    }
  }
}