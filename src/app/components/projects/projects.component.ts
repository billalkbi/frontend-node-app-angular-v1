import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    { idProject: 'Frank', ProjectName: 'Murphy', category: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
    { idProject: 'Frank', ProjectName: 'Murphy', dateCraction: 'frank.murphy@test.com', description: 'adresse' , lesDashboard: '01/01/1111'  },
];

}
