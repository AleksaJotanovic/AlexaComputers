import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  @Output() categorySaving = new EventEmitter<{ categoryForm: NgForm, imageInput: HTMLInputElement }>();

  @Input() categories: Category[] = [];

  @ViewChild('categoryForm') categoryForm!: NgForm;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.categoryFormValue$.subscribe({
      next: (val) => this.categoryForm?.setValue({ name: val.name, description: val.description, parent_id: val.parent_id }),
      error: (err) => console.log('Value error from service: ', err)
    })
  }

  emitCategorySaving(categoryForm: NgForm, imageInput: HTMLInputElement) {
    this.categorySaving.emit({ categoryForm: categoryForm, imageInput: imageInput });
  }

}
