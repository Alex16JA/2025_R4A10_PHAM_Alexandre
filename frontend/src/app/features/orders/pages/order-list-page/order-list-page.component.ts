import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrderLocalService } from '../../../../services/order.service';
import { Order } from '../../../../models/order';
import { OrderCardComponent } from '../../components/order-card/order-card.component';

@Component({
  selector: 'app-order-list-page',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './order-list-page.component.html',
  styleUrl: './order-list-page.component.css',
})
export class OrderListPageComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  private destroy$ = new Subject<void>();

  constructor(private readonly orderService: OrderLocalService) {}

  ngOnInit(): void {
    this.orderService.findMany()
      .pipe(takeUntil(this.destroy$))
      .subscribe((orders) => {
        this.orders = orders;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDelete(id: string) {
    this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter((order) => order.id !== id);
    });
  }
}