import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {




  AddProjectForm: any;
  errorMessage: string |undefined;
    constructor(private formBuilder : FormBuilder,
                private ngZone: NgZone,
                private router: Router,
                private auth : AuthService) { }

    ngOnInit(): void {
      this.AddProjectForm= this.formBuilder.group({

        ProjectName : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
        category: this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
        dateCraction: this.formBuilder.control("",[ Validators.required]),
        desciption : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),



      });
    }

    onSubmit(): any {
      this.auth.signup(this.AddProjectForm.value)
      .subscribe(() => {
          console.log('Data added successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/produits'))
        }, (err) => {
          this.errorMessage=err;
          console.log(this.AddProjectForm.value);

      });
    }

}
