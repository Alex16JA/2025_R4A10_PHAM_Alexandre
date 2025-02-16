import { Component } from '@angular/core';
import { NomProfileComponent } from './nom-profile/nom-profile.component';
import { MetierProfileComponent } from './metier-profile/metier-profile.component';

@Component({
  selector: 'app-info-profile',
  standalone: true,
  imports: [NomProfileComponent, MetierProfileComponent],
  templateUrl: './info-profile.component.html',
  styleUrl: './info-profile.component.sass'
})
export class InfoProfileComponent {

}
