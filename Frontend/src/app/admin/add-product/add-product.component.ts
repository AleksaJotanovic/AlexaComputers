import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories: Category[] = [];

  constructor(private admin: AlexitService, private crud: CrudService) { }

  ngOnInit(): void {
    this.admin.categories$.subscribe({ next: (value) => this.categories = value, error: (err) => console.log(err) });
  }

  // Add Product.
  add(event: { productForm: FormGroup, productImages: HTMLInputElement }) {
    const files = event.productImages.files as FileList
    const formdata = new FormData();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      formdata.append("files", file);
    }
    const productBody: Product = {
      ...event.productForm.value,
      categoryName: this.categories.find((ctg) => ctg._id === event.productForm.get('category_id')?.value)?.name
    };
    this.admin.addProduct(productBody, formdata);
    event.productForm.reset();
  }

}
