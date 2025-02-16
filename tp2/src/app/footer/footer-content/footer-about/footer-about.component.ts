import { Component } from '@angular/core';
import { LogoFooterComponent } from './logo-footer/logo-footer.component';
import { TextFooterComponent } from './text-footer/text-footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@Component({
  selector: 'app-footer-about',
  standalone: true,
  imports: [LogoFooterComponent, TextFooterComponent, CopyrightComponent],
  templateUrl: './footer-about.component.html',
  styleUrl: './footer-about.component.sass'
})
export class FooterAboutComponent {

}
