import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer.types';
import { ApiService } from '../shared/services/api.service';
import { BasketItem } from './basket.types';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  protected basketItems: BasketItem[] = [];

  protected customer: Customer = { name: '', address: '', creditCard: '' };

  constructor(
    private apiService: ApiService,private basketService:BasketService,
    private router: Router,
  ) {
   // this.apiService.getBasket().subscribe((basketItems) => (this.basketItems = basketItems));
    this.basketService.fetch().subscribe(()=>{
      this.basketItems=this.basketService.items;

    }
    );
    console.log("total",this.basketItems)
  }

  protected get basketTotal(): number {
    return this.basketService.numberOfItems;
  }

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.basketService.checkout(this.customer).subscribe(()=>{
      this.basketItems=this.basketService.items;
      this.router.navigate(['']);

    })      
      
    }

 
  
}
