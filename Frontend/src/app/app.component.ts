import { Component, OnInit } from '@angular/core';
import { AlexitService } from './services/alexit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
    this.admin.initCategories();
    this.admin.initProducts();
    this.admin.initUsers();
    this.admin.initOrders();
  }

}
