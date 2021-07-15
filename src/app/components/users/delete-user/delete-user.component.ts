import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  errorMessage: any;
  getId: any;



  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
             ) { }

  ngOnInit( ): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.DeleteUser(this.getId);


  }
  DeleteUser(id : string){
    this.usersService.deleteUser(this.getId,)
    .subscribe(() => {
        console.log('Data deleted successfully!')

      }, (err) => {
        this.errorMessage=err;


    });

  }

}
