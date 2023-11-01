import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category.model';

@Pipe({
  name: 'ptIf'
})
export class PtIfPipe implements PipeTransform {

  transform(value: Category[], ...args: unknown[]): any {
    if (value) {
      return value.filter((val) => val.parent_id === "" && val.parentName === "")
    }
  }

}
