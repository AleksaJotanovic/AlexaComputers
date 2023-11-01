import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  // Kategorije
  categoriesGet() {
    return this.http.get('http://localhost:8085/api/categories');
  }

  categoryPost(category: Category) {
    return this.http.post('http://localhost:8085/api/categories/add', category);
  }
  categoryImageUpload(file: FormData) {
    return this.http.post('http://localhost:8085/api/categories/image-upload', file)
  }

  categoryPut(category: any) {
    return this.http.put(`http://localhost:8085/api/categories/update/${category._id}`, category);
  }

  categoryDelete(id: string) {
    return this.http.delete(`http://localhost:8085/api/categories/delete/${id}`);
  }


  // Proizvodi
  productsGet() {
    return this.http.get<Product[]>('http://localhost:8085/api/products');
  }
  productPost(product: Product) {
    return this.http.post('http://localhost:8085/api/products/add', product);
  }
  productDelete(id: string) {
    return this.http.delete(`http://localhost:8085/api/products/delete/${id}`);
  }
  productPut(product: Product) {
    return this.http.put(`http://localhost:8085/api/products/update/${product._id}`, product)
  }
  productImagesUpload(formdata: FormData) {
    return this.http.post('http://localhost:8085/api/products/images', formdata);
  }


  // Users.
  usersGet() {
    return this.http.get<User[]>('http://localhost:8085/api/users');
  }
  userPost(user: User) {
    return this.http.post('http://localhost:8085/api/users/post', user);
  }
  userDelete(id: string) {
    return this.http.delete(`http://localhost:8085/api/users/delete/${id}`);
  }
  userPut(user: User) {
    return this.http.put(`http://localhost:8085/api/users/put/${user._id}`, user);
  }

  // Orders
  ordersGet() {
    return this.http.get<Order[]>('http://localhost:8085/api/orders');
  }
  orderPost(order: Order) {
    return this.http.post('http://localhost:8085/api/orders/post', order);
  }
  orderDelete(id: string) {
    return this.http.delete(`http://localhost:8085/api/orders/delete/${id}`);
  }
  orderPut(order: Order) {
    return this.http.put(`http://localhost:8085/api/orders/put/${order._id}`, order);
  }
}
