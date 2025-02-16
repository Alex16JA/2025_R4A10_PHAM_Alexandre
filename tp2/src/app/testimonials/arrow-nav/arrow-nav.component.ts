import { Component } from '@angular/core';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { DotsComponent } from './dots/dots.component';

@Component({
  selector: 'app-arrow-nav',
  standalone: true,
  imports: [ArrowLeftComponent, ArrowRightComponent, DotsComponent],
  templateUrl: './arrow-nav.component.html',
  styleUrl: './arrow-nav.component.sass'
})
export class ArrowNavComponent {

}
