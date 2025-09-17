import { Component, input, output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  addToBasket = output<Product>();

  ajouterAuPanier() {
    this.product().stock-=1;
    this.addToBasket.emit(this.product());
  }

  hasProductsInStock() {
    return this.product().stock >= 1;
  }
}
