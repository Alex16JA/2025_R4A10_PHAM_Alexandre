import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../service/voyage.service';
import { Voyage } from '../models/voyage.model';
import { CurrencyPipe } from '@angular/common'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-detail-voyage',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, RouterLinkActive],
  templateUrl: './detail-voyage.component.html',
  styleUrls: ['./detail-voyage.component.scss']
})
export class DetailVoyageComponent implements OnInit {
  voyage: Voyage | undefined;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService
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
      window.location.href = '/home';
    }
  }
}