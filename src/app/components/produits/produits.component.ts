import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  ngOnInit(): void {

  }

  users = [
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
];

}
