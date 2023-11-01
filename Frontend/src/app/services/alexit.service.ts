import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from './crud.service';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class AlexitService {

  categories$ = new BehaviorSubject<Category[]>([]);

  products$ = new BehaviorSubject<Product[]>([]);

  users$ = new BehaviorSubject<User[]>([]);

  orders$ = new BehaviorSubject<Order[]>([]);

  constructor(private crud: CrudService) { }

  // Kategorije
  initCategories() {
    this.crud.categoriesGet().subscribe((res: any) => this.categories$.next(res));
  }
  addCategory(category: Category, file: FormData) {
    this.crud.categoryImageUpload(file).subscribe((res: any) => {
      let categoryBody: Category = { ...category, _id: uuidv4(), image: `assets/categories/${res.data}` };
      this.crud.categoryPost(categoryBody).subscribe(() => this.initCategories());
    });
  }
  updateCategory(category: any) {
    this.crud.categoryPut(category).subscribe(() => this.initCategories());
  }
  deleteCategory(id: string) {
    this.crud.categoryDelete(id).subscribe(() => this.initCategories());
  }


  // Proizvodi
  initProducts() {
    this.crud.productsGet().subscribe((res) => this.products$.next(res));
  }
  addProduct(product: Product, formdata: FormData) {
    this.crud.productImagesUpload(formdata).subscribe((res: any) => {
      const productBody: Product = { ...product, _id: uuidv4(), images: res };
      this.crud.productPost(productBody).subscribe(() => this.initProducts());
    });
  }
  updateProduct(product: Product) {
    this.crud.productPut(product).subscribe(() => this.initProducts());
  }
  deleteProduct(id: string) {
    this.crud.productDelete(id).subscribe(() => this.initProducts());
  }


  // Users
  initUsers() {
    this.crud.usersGet().subscribe((res) => this.users$.next(res));
  }
  addUser(user: User) {
    this.crud.userPost(user).subscribe(() => this.initUsers());
  }
  updateUser(user: User) {
    this.crud.userPut(user).subscribe(() => this.initUsers());
  }
  deleteUser(id: string) {
    this.crud.userDelete(id).subscribe(() => this.initUsers());
  }

  // Orders.
  initOrders() {
    this.crud.ordersGet().subscribe((res) => this.orders$.next(res));
  }
  addOrder(order: Order) {
    this.crud.orderPost(order).subscribe(() => this.initOrders());
  }
  updateOrder(order: Order) {
    this.crud.orderPut(order).subscribe(() => this.initOrders());
  }
  deleteOrder(id: string) {
    this.crud.orderDelete(id).subscribe(() => this.initOrders());
  }

}
