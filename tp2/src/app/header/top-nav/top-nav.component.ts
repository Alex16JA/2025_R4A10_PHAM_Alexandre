import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.sass'
})
export class TopNavComponent {
  menus = [
    { label: "Home", href: "#" },
    { label: "Find a doctor", href: "#" },
    { label: "Apps", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "About us", href: "#" }
  ];
}
