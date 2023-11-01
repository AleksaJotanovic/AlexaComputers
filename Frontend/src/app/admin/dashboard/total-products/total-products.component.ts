import { Component, Input, OnInit } from '@angular/core';
import { AlexitService } from 'src/app/services/alexit.service';

@Component({
  selector: 'total-products',
  templateUrl: './total-products.component.html',
  styleUrls: ['./total-products.component.css']
})
export class TotalProductsComponent implements OnInit {

  @Input() totalProducts!: number;

  constructor(private admin: AlexitService) { }

  ngOnInit(): void {
  }

}