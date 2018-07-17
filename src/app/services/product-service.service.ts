import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProductModel} from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private serviceUrl = 'http://localhost:4001/products/getAllProduct';

  constructor(private http: HttpClient) { }

  getProductDetails(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.serviceUrl);
  }
}
