import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  @Output() onOrderDelete = new EventEmitter<{ id: string }>();

  @Input() orders: Order[] = [];

  constructor() { }

  ngOnInit(): void { }

  emitOnOrderDelete(id: string) {
    this.onOrderDelete.emit({ id: id });
  }

}
