import { Component } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';

@Component({
  selector: 'app-service-grid',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './service-grid.component.html',
  styleUrl: './service-grid.component.sass'
})
export class ServiceGridComponent {
  services = [
    {
      image: '../../assets/main/Frame1.png',
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
      image: '../../assets/main/Frame2.png',
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system'
    },
    {
      image: '../../assets/main/Frame3.png',
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      image: '../../assets/main/Frame4.png',
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      image: '../../assets/main/Frame5.png',
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
      image: '../../assets/main/Frame6.png',
      title: 'Tracking',
      description: 'Track and save your medical history and health data'
    }
  ];
}
