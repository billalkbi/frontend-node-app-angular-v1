import { Component, OnInit } from '@angular/core';
import { single } from 'src/app/data/products';
@Component({
  selector: 'node-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.css']
})
export class NumberCardChartComponent implements OnInit {

  single: any[] | undefined;


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }
  ngOnInit(): void {
  }

}
