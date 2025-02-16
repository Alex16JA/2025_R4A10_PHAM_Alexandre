import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  menus = [
    { label: "Home", href: "#" },
    { label: "Find a doctor", href: "#" },
    { label: "Apps", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "About us", href: "#" }
  ];
}
