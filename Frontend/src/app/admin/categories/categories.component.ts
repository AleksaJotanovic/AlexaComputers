import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { AlexitService } from 'src/app/services/alexit.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  id: string = '';


  constructor(private admin: AlexitService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.admin.categories$.subscribe({ next: (val) => this.categories = val, error: (err) => console.log("Subscribe err: ", err) });
  }

  // Category form.
  add(categoryValue: Category, imageInput: HTMLInputElement) {
    const imageBlob = imageInput.files as FileList;
    const file = new FormData();
    file.set('file', imageBlob[0]);

    const ptfind = this.categories.filter((ctg) => categoryValue.parent_id === ctg._id);
    const categoryBody: Category = {
      ...categoryValue,
      parentName: ptfind.length > 0 ? ptfind[0].name : ""
    };
    this.admin.addCategory(categoryBody, file);
  }

  update(category: Category) {
    const parent = this.categories.filter((ctg) => category.parent_id === ctg._id);
    let updateBody: Category = { ...category, _id: this.id, parentName: parent.length > 0 ? parent[0].name : "" }
    this.admin.updateCategory(updateBody);
    this.id = '';
  }

  save(event: { categoryForm: NgForm, imageInput: HTMLInputElement }) {
    if (this.id === '') {
      this.add(event.categoryForm.value, event.imageInput);
    } else {
      this.update(event.categoryForm.value)
    }
  }


  // Categories table.
  edit(event: any) {
    this.categoriesService.setCategoryFormValue({ name: event.name, description: event.description, parent_id: event.parent_id });
    this.id = event._id;
  }

  delete(event: any) {
    this.admin.deleteCategory(event);
  }

}
