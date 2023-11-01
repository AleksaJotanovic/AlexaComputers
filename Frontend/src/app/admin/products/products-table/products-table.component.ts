import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @Output() onProductsInit = new EventEmitter();

  @Output() onProductDelete = new EventEmitter<{ id: string }>();

  @Input() products: Product[] = [];

  @Input() categories: Category[] = [];

  filterString: string = '';
  categoryFilter: string = '';
  filterPublished: boolean | null = null;
  filterStock: number | null = null;
  filterPrice: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  emitOnProductsInit() {
    this.onProductsInit.emit();
  }

  emitOnProductDelete(id: string) {
    this.onProductDelete.emit({ id: id });
  }

}
