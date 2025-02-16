import { Component, Input } from '@angular/core';
import { ImgTestimonialsComponent } from './testimonials-profile/img-testimonials/img-testimonials.component';
import { TestimonialsProfileComponent } from './testimonials-profile/testimonials-profile.component';
import { TestimonialsTextComponent } from './testimonials-text/testimonials-text.component';

@Component({
  selector: 'app-zone-testimonials',
  standalone: true,
  imports: [TestimonialsProfileComponent, TestimonialsTextComponent],
  templateUrl: './zone-testimonials.component.html',
  styleUrl: './zone-testimonials.component.sass'
})
export class ZoneTestimonialsComponent {
  @Input() profile: any;
}
