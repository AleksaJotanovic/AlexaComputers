import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css']
})
export class CategoriesTableComponent implements OnInit {

  @Output() categoryEditing = new EventEmitter<Category>();

  @Output() categoryDeleting = new EventEmitter<string>();

  @Input() categories: Category[] = [];

  constructor() { }

  ngOnInit(): void { }

  emitCategoryEditing(category: Category) {
    this.categoryEditing.emit(category);
  }

  emitCategoryDeleting(id: string) {
    this.categoryDeleting.emit(id);
  }

}
