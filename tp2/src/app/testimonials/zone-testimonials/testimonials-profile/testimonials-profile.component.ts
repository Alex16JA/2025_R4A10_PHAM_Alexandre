import { Component, Input } from '@angular/core';
import { ImgTestimonialsComponent } from './img-testimonials/img-testimonials.component';
import { InfoProfileComponent } from './info-profile/info-profile.component';

@Component({
  selector: 'app-testimonials-profile',
  standalone: true,
  imports: [ImgTestimonialsComponent, InfoProfileComponent],
  templateUrl: './testimonials-profile.component.html',
  styleUrl: './testimonials-profile.component.sass'
})
export class TestimonialsProfileComponent {
  @Input() profile: any;
}
