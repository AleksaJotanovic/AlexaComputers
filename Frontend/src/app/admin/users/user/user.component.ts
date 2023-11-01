import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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


  constructor(private admin: AlexitService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.admin.users$.subscribe({
      next: (val) => {
        const user = val.find((v) => v._id === this.route.snapshot.params['id']);
        if (user !== undefined) {
          this.userForm.setValue({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            password: user.password,
            billingAddress: user.billingAddress,
            shippingAddress: user.shippingAddress
          })
        }
      }, error: (err) => console.log('Subscribe error: ', err)
    });
  }

  update() {
    const userBody: User = { ...this.userForm.value, _id: this.route.snapshot.params['id'] };
    this.admin.updateUser(userBody);
    this.userForm.reset();
    this.router.navigate(['admin/users']);
  }

}