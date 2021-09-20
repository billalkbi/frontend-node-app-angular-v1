import { Component, OnInit } from '@angular/core';
import { single } from 'src/app/data/products';
@Component({
  selector: 'node-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.css']
})
export class PieGridChartComponent implements OnInit {
  single:any [] | undefined;
   // options
   showLegend: boolean = true;
   showLabels: boolean = true;

   colorScheme = {
     domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
   };

   constructor() {
     Object.assign(this, { single });
   }

   onSelect(event:any) {
     console.log(event);
   }

  ngOnInit(): void {
  }

}
