import { Component } from '@angular/core';
import { LogoImgComponent } from './logo-img/logo-img.component';
import { LogoTextComponent } from './logo-text/logo-text.component';

@Component({
  selector: 'app-logo-nom',
  standalone: true,
  imports: [LogoImgComponent, LogoTextComponent],
  templateUrl: './logo-nom.component.html',
  styleUrl: './logo-nom.component.sass'
})
export class LogoNomComponent {

}
