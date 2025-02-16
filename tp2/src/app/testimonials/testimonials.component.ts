import { Component } from '@angular/core';
import { TitreTestimonialsComponent } from './titre-testimonials/titre-testimonials.component';
import { ZoneTestimonialsComponent } from './zone-testimonials/zone-testimonials.component';
import { ArrowNavComponent } from './arrow-nav/arrow-nav.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TitreTestimonialsComponent, ZoneTestimonialsComponent, ArrowNavComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.sass'
})
export class TestimonialsComponent {

}
