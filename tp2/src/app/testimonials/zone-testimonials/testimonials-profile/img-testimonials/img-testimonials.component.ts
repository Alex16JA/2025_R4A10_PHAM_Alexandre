import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './img-testimonials.component.html',
  styleUrl: './img-testimonials.component.sass'
})
export class ImgTestimonialsComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
