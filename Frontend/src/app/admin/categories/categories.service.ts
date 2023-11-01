import { BehaviorSubject } from "rxjs";

export class CategoriesService {

  categoryFormValue$ = new BehaviorSubject({ name: '', description: '', parent_id: '' });

  constructor() { }

  setCategoryFormValue(value: { name: '', description: '', parent_id: '' }) {
    this.categoryFormValue$.next(value);
  }

}