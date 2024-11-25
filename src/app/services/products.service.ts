import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  private url: string = "https://fakestoreapi.com/products";
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  getProduct(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
