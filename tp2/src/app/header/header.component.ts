import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { IllustrationComponent } from './illustration/illustration.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, TopNavComponent, HeaderTextComponent, IllustrationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
