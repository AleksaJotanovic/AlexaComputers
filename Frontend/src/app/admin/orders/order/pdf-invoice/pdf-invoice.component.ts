import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'pdf-invoice',
  templateUrl: './pdf-invoice.component.html',
  styleUrls: ['./pdf-invoice.component.css']
})
export class PdfInvoiceComponent implements OnInit {

  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
