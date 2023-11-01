import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
    this.admin.users$.subscribe({ next: (val) => this.users = val, error: (err) => console.log(err) });
  }

  delete(event: { id: string }) {
    this.admin.deleteUser(event.id);
  }

}