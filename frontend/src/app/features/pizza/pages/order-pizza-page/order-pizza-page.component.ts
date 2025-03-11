import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza, PizzaService } from '../../../../services/pizza.service';
import { OrderLocalService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css',
})
export class OrderPizzaPageComponent implements OnInit {
  orderForm!: FormGroup;
  pizzas: Pizza[] = [];
  sizes = ['Medium', 'Large', 'XXL'];
  paymentMethods = ['Espèces', 'Carte Bleue', 'Bitcoin'];

  constructor(
    private fb: FormBuilder,
    private pizzaService: PizzaService,
    private orderService: OrderLocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
    });

    this.orderForm = this.fb.group({
      pizza: ['', Validators.required],
      size: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderData = {
        pizza: this.orderForm.value.pizza,
        size: this.orderForm.value.size,
        paymentMethod: this.orderForm.value.paymentMethod,
        email: this.orderForm.value.email,
      };

      this.orderService.create(orderData).subscribe(() => {
        this.router.navigate(['/commandes']);
      });
    }
  }
}