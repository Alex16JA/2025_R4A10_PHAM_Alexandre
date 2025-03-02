import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail-voyage',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './detail-voyage.component.html',
  styleUrls: ['./detail-voyage.component.scss'],
})
export class DetailVoyageComponent implements OnInit {
  voyage: Voyage | undefined;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
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