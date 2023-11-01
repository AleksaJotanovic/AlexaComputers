import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  categories: Category[] = [];


  constructor(private admin: AlexitService) {
  }
  ngOnInit(): void {
    this.init();
  }


  init() {
    this.admin.products$.subscribe({ next: (val) => this.products = val, error: (err) => console.log(err) });
    this.admin.categories$.subscribe({ next: (val) => this.categories = val, error: (err) => console.log(err) });
  }

  delete(event: { id: string }) {
    this.admin.deleteProduct(event.id);
  }

}