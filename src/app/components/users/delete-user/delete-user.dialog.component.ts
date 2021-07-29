import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-delete-user',
  templateUrl: './delete-user.dialog.component.html',
  styleUrls: ['./delete-user.dialog.component.css']
})
export class DeleteUserDialogComponent implements OnInit {
  errorMessage: any;
 user: any;



  constructor(private usersService: UsersService,
              public dialogRef: MatDialogRef<DeleteUserDialogComponent >,
              @Inject(MAT_DIALOG_DATA) public id: any
             ) { }

  ngOnInit( ): void {
    this.usersService.getUser(this.id)
    .subscribe(user=>this.user=user)
  }


  onNoClick(): void {
    this.dialogRef.close();
   }

  confirmDelete(id : string){
    this.usersService.deleteUser(this.id,)
    .subscribe(() => {
        console.log('Data deleted successfully!')

      }, (err) => {
        this.errorMessage=err;


    });

  }

}
