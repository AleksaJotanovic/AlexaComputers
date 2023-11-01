import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  categories: Category[] = [];

  images: string[] = [];

  productForm: FormGroup = new FormGroup({ //categoryName, images ,_id
    name: new FormControl(''),
    manufacturer: new FormControl(''),
    uom: new FormControl(''),
    sku: new FormControl(''),
    regularPrice: new FormControl(0),
    taxClass: new FormControl(''),
    salePrice: new FormControl(0),
    category_id: new FormControl(''),
    specifications: new FormArray([]),
    inStock: new FormControl(0),
    weight: new FormControl(0),
    garantee: new FormControl(''),
    published: new FormControl(false)
  });

  constructor(private route: ActivatedRoute, private admin: AlexitService, private router: Router) { }

  ngOnInit(): void {
    this.admin.products$.subscribe({
      next: (value) => {
        const product = value.find((prod) => prod._id === this.route.snapshot.params['id']);
        if (product !== undefined) {
          product.specifications.forEach(() => this.newSpecification());
          this.productForm.patchValue({
            name: product.name,
            manufacturer: product.manufacturer,
            uom: product.uom,
            sku: product.sku,
            regularPrice: product.regularPrice,
            taxClass: product.taxClass,
            salePrice: product.salePrice,
            category_id: product.category_id,
            specifications: product.specifications,
            inStock: product.inStock,
            weight: product.weight,
            garantee: product.garantee,
            published: product.published
          });
          this.images = product.images;
        }
      },
      error: (err) => console.log('Error when subscribing to products: ', err)
    });
    this.admin.categories$.subscribe({
      next: (value) => this.categories = value,
      error: (err) => console.log(err)
    });
  }

  ngOnDestroy(): void {
    this.productForm.reset();
    this.getSpecifications().clear();
  }

  // Other functions
  countSalePrice() {
    let regular = this.productForm.get('regularPrice')?.value;
    let tax = Number(this.productForm.get('taxClass')?.value);
    let result = ((tax / 100) * regular) + regular;
    this.productForm.get('salePrice')?.setValue(result);
  }

  setImageSrc(event: any, expandedImg: HTMLImageElement) {
    expandedImg.src = event.target.src;
  }
  //--------------------------.


  // Functionalities
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

  update() {
    const productBody: Product = {
      ...this.productForm.value,
      _id: this.route.snapshot.params['id'],
      categoryName: this.categories.find((ctg) => ctg._id === this.productForm.get('category_id')?.value)?.name
    };
    this.admin.updateProduct(productBody);
    this.router.navigate(['admin/products']);
  }

}
