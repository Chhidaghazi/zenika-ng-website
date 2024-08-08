import { inject, Injectable } from '@angular/core';
import { BasketService } from '../basket/basket.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
   


  private basketService = inject(BasketService);

    get numberOfBasketItems(): number {
      return  this.basketService.numberOfItems;
    }
}
