import { Component, OnInit } from '@angular/core';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProducts: number = 0

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
    this.admin.products$.subscribe({
      next: (value) => this.totalProducts = value.length,
      error: (err) => console.log('Error when subscribing to products from dashboard: ', err)
    });
  }
}
