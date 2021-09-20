import { Component, OnInit } from '@angular/core';
import { single } from 'src/app/data/products';
@Component({
  selector: 'node-tree-map-chart',
  templateUrl: './tree-map-chart.component.html',
  styleUrls: ['./tree-map-chart.component.css']
})
export class TreeMapChartComponent implements OnInit {

  single: any[] | undefined;


  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }

  labelFormatting(c:any) {
    return `${(c.label)} Population`;
  }

  ngOnInit(): void {
  }

}
