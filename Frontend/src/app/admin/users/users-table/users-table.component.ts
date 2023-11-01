import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Output() onUserDelete = new EventEmitter<{ id: string }>()

  @Input() users: User[] = [];

  filterRole: string = '';

  filterSearch: string = '';

  constructor() { }

  ngOnInit(): void { }

  emitOnUserDelete(id: string) {
    this.onUserDelete.emit({ id: id });
  }

}
