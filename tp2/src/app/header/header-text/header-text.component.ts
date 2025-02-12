import { Component } from '@angular/core';
import { TitreTextComponent } from './titre-text/titre-text.component';
import { TextHeaderComponent } from './text-header/text-header.component';
import { ButtonConsultComponent } from './button-consult/button-consult.component';

@Component({
  selector: 'app-header-text',
  standalone: true,
  imports: [TitreTextComponent, TextHeaderComponent, ButtonConsultComponent],
  templateUrl: './header-text.component.html',
  styleUrl: './header-text.component.sass'
})
export class HeaderTextComponent {

}
