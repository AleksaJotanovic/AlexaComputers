import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'ctgFilter'
})
export class CtgFilterPipe implements PipeTransform {

  transform(value: Product[], input: string): any {
    if (input) {
      return value.filter((val) => val.categoryName === input);
    } else {
      return value;
    }
  }

}
