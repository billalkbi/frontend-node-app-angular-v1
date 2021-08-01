import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'node-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {
  hide = true;
  addProjectForm: any;
  errorMessage: string |undefined;
  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,
             @Inject(MAT_DIALOG_DATA) public data: Project,
              private ngZone: NgZone,
              private router: Router,
              private formBuilder : FormBuilder,
              private projectsService : ProjectsService) { }

  ngOnInit(): void {

    this.addProjectForm= this.formBuilder.group({
      id: this.formBuilder.control("",[ Validators.required]),
      name : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
      description : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
      created : this.formBuilder.control("",[ Validators.required]),

    });
  }

  public saveAdd(): void {
    this.projectsService.addProject(this.addProjectForm.value).subscribe(() => {
      console.log('Data added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/projects'))
    }, (err) => {
      this.errorMessage=err;
      console.log(this.addProjectForm.value);

  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
