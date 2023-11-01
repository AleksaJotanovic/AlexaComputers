import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order!: Order;

  constructor(private route: ActivatedRoute, private alexit: AlexitService) { }

  ngOnInit(): void {
    this.alexit.orders$.subscribe({
      next: (val) => {
        const order = val.find((v) => v._id === this.route.snapshot.params['id']);
        if (order !== undefined) { this.order = order };
      }, error: (err) => console.log(err)
    });
  }

}