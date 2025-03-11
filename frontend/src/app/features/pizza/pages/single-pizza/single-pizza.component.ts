import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pizza, PizzaService } from '../../../../services/pizza.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent implements OnInit {
  pizza!: Pizza;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('name');
    if (slug) {
      this.pizzaService.getPizzaBySlug(slug).subscribe((pizza) => {
        if (pizza) {
          this.pizza = pizza;
        } else {
          this.router.navigate(['/404']); 
        }
      });
    }
  }

  get stars(): string[] {
    return Array(5).fill('☆').map((_, i) => (i < this.pizza.rating ? '★' : '☆'));
  }
}