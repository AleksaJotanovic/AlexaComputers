import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() productAdding = new EventEmitter<{ productForm: FormGroup, productImages: HTMLInputElement }>();

  @Input() categories: Category[] = [];

  productForm: FormGroup = new FormGroup({ //categoryName, images ,_id
    name: new FormControl(''),
    manufacturer: new FormControl(''),
    uom: new FormControl(''),
    sku: new FormControl(''),
    regularPrice: new FormControl(0),
    taxClass: new FormControl(''),
    salePrice: new FormControl(),
    category_id: new FormControl(''),
    specifications: new FormArray([this.putSpecifications()]),
    inStock: new FormControl(0),
    weight: new FormControl(0),
    garantee: new FormControl(''),
    published: new FormControl(false)
  });


  constructor() { }

  ngOnInit(): void {

  }

  // Functions for product form group.
  putSpecifications() {
    return new FormGroup({
      spec: new FormControl(''),
      value: new FormControl('')
    });
  }

  getSpecifications() {
    return this.productForm.get('specifications') as FormArray;
  }

  newSpecification() {
    return this.getSpecifications().push(this.putSpecifications());
  }

  removeSpecification(i: number) {
    this.getSpecifications().removeAt(i);
  }

  // Other Functions.
  countSalePrice() {
    let regular = this.productForm.get('regularPrice')?.value;
    let tax = Number(this.productForm.get('taxClass')?.value);
    let result = ((tax / 100) * regular) + regular;
    this.productForm.get('salePrice')?.setValue(result);
  }

  emitProductAdding(productForm: FormGroup, productImages: HTMLInputElement) {
    this.productAdding.emit({ productForm: productForm, productImages: productImages });
  }

}
