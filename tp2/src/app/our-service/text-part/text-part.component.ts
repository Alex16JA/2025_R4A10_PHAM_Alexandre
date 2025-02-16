import { Component } from '@angular/core';
import { TitreServiceComponent } from './titre-service/titre-service.component';
import { TextServiceComponent } from './text-service/text-service.component';

@Component({
  selector: 'app-text-part',
  standalone: true,
  imports: [TitreServiceComponent, TextServiceComponent],
  templateUrl: './text-part.component.html',
  styleUrl: './text-part.component.sass'
})
export class TextPartComponent {

}
