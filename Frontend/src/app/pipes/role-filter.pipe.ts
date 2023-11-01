import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {

  transform(value: User[], input: string): any {
    if (input === 'Menager') {
      return value.filter((val) => val.role === input);
    } else if (input === 'Seller') {
      return value.filter((val) => val.role === input);
    } else if (input === 'Customer') {
      return value.filter((val) => val.role === input);
    } else if (input === '') {
      return value;
    }
  }

}
