import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AlexitService } from 'src/app/services/alexit.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
  }

  save(event: { userForm: FormGroup }) {
    const userBody: User = { ...event.userForm.value, _id: uuidv4() };
    this.admin.addUser(userBody);
    event.userForm.reset();
  }

}