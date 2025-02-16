import { Component } from '@angular/core';
import { TitreTextHeaderComponent } from './titre-text-header/titre-text-header.component';
import { TextTextHeaderComponent } from './text-text-header/text-text-header.component';
import { ButtonTextHeaderComponent } from './button-text-header/button-text-header.component';

@Component({
  selector: 'app-text-header',
  standalone: true,
  imports: [TitreTextHeaderComponent, TextTextHeaderComponent, ButtonTextHeaderComponent],
  templateUrl: './text-header.component.html',
  styleUrl: './text-header.component.sass'
})
export class TextHeaderComponent {

}
