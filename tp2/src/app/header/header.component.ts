import { Component } from '@angular/core';
import { LogoNomComponent } from './logo-nom/logo-nom.component';
import { NavComponent } from './nav/nav.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoNomComponent, NavComponent, MainHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
