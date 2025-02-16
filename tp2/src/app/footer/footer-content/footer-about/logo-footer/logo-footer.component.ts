import { Component } from '@angular/core';
import { ImgLogoFooterComponent } from './img-logo-footer/img-logo-footer.component';
import { NomLogoFooterComponent } from './nom-logo-footer/nom-logo-footer.component';

@Component({
  selector: 'app-logo-footer',
  standalone: true,
  imports: [ImgLogoFooterComponent, NomLogoFooterComponent],
  templateUrl: './logo-footer.component.html',
  styleUrl: './logo-footer.component.sass'
})
export class LogoFooterComponent {

}
