import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: Product[], input: string): any {
    if (input === 'asc') {
      return value.sort((a, b) => a.salePrice - b.salePrice);
    } else if (input === 'desc') {
      return value.sort((a, b) => b.salePrice - a.salePrice);
    } else if (input === '') {
      return value;
    }
  }

}
