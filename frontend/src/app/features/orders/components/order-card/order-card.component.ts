import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() order: any;
  @Output() orderDeleted = new EventEmitter<string>();

  removeOrder() {
    this.orderDeleted.emit(this.order.id);
  }
}