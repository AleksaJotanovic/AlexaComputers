import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Product[], input: string): any {
    if (input) {
      return value.filter((val) => (val.name + val.categoryName + val.manufacturer + val.sku + val.salePrice + val.inStock).toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }

}
