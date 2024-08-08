import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../product/product.types';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogtService {
    products: Product[] = [];
  
  

private apiService = inject(ApiService);

  fetch(): Observable<Product[]> {
    return this.apiService.getProducts().pipe(tap((products) => (this.products = products)));
  }
  private decreaseStock(product: Product): void {
    product.stock -= 1;
  }
  protected isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  protected get isStockEmpty(): boolean {
    return this.products.every(({ stock }) => stock === 0);
  }
}
