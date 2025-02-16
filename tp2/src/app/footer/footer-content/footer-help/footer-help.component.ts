import { Component } from '@angular/core';
import { FooterColumnComponent } from './footer-column/footer-column.component';

@Component({
  selector: 'app-footer-help',
  standalone: true,
  imports: [FooterColumnComponent],
  templateUrl: './footer-help.component.html',
  styleUrl: './footer-help.component.sass'
})
export class FooterHelpComponent {

}
