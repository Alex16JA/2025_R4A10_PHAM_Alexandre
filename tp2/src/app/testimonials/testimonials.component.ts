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
  profiles = [
    {
      name: 'Edward Newgate',
      image: '../../assets/img-testimonials/lego_1.jpg',
      quote: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      name: 'John Doe',
      image: '../../assets/img-testimonials/lego_2.jpg',
      quote: 'This platform has revolutionized how I manage my health. Everything is so easy to access!'
    },
    {
      name: 'Jane Smith',
      image: '../../assets/img-testimonials/lego_3.jpg',
      quote: 'I love how secure and user-friendly this app is. Highly recommended!'
    }
  ];

  currentIndex = 0;

  get currentProfile() {
    return this.profiles[this.currentIndex];
  }

  nextProfile() {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  previousProfile() {
    this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length;
  }
}
