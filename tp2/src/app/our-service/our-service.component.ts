import { Component } from '@angular/core';
import { TextPartComponent } from './text-part/text-part.component';
import { ServiceGridComponent } from './service-grid/service-grid.component';
import { ButtonLearnMoreComponent } from './button-learn-more/button-learn-more.component';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [TextPartComponent, ServiceGridComponent, ButtonLearnMoreComponent],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.sass'
})
export class OurServiceComponent {

}
