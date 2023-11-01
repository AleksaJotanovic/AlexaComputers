import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.admin.orders$.subscribe({ next: (val) => this.orders = val, error: (err) => console.log(err) });
  }

  delete(event: { id: string }) {
    console.log(event.id);
  }


}
