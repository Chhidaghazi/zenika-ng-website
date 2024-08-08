import { Component } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  protected numberOfBasketItems = 0;

  constructor(private apiService: ApiService,private menuService:MenuService,) {
    // For now, we have an issue: the `numberOfBasketItems` property is not reactive!
    // The property is not updated when we add a product to the bakset or after checkout...
   // this.apiService.getBasket().subscribe(({ length }) => (this.numberOfBasketItems = length));
    this.numberOfBasketItems= this.menuService.numberOfBasketItems;
   
   
    
  }
}
