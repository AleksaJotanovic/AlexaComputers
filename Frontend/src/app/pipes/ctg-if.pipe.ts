import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category.model';

@Pipe({
  name: 'ctgIf'
})
export class CtgIfPipe implements PipeTransform {

  transform(value: Category[], ...args: any[]): any {
    if (value) {
      return value.filter((val) => String(val.parent_id).length > 0);
    }
  }

}
