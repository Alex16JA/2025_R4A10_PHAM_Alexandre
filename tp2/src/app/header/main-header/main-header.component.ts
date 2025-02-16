import { Component } from '@angular/core';
import { TextHeaderComponent } from './text-header/text-header.component';
import { ImgMainHeaderComponent } from './img-main-header/img-main-header.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [TextHeaderComponent, ImgMainHeaderComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.sass'
})
export class MainHeaderComponent {

}
