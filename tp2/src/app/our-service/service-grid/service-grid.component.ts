import { Component } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';

@Component({
  selector: 'app-service-grid',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './service-grid.component.html',
  styleUrl: './service-grid.component.sass'
})
export class ServiceGridComponent {

}
