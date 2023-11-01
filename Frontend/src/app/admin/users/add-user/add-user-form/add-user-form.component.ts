import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @Output() onUserSave = new EventEmitter<{ userForm: FormGroup }>();

  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    billingAddress: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    }),
    shippingAddress: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {

  }

  copyFromBillingAddress() {
    const billingAddress = this.userForm.get('billingAddress') as FormGroup;
    this.userForm.get('shippingAddress')?.setValue({
      country: billingAddress.value.country,
      city: billingAddress.value.city,
      street: billingAddress.value.street,
      zip: billingAddress.value.zip
    });
  }

  emitOnUserSave(userForm: FormGroup) {
    this.onUserSave.emit({ userForm: userForm });
  }


}
