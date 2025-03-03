import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { NomSiteComponent } from '../nom-site/nom-site.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, NomSiteComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
