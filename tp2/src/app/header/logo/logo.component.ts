import { Component } from '@angular/core';
import { ImageLogoComponent } from './image-logo/image-logo.component';
import { TextLogoComponent } from './text-logo/text-logo.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [ImageLogoComponent, TextLogoComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.sass'
})
export class LogoComponent {

}
