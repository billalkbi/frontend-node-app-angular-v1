import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/users';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'node-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  private searchTerms = new Subject<string>();
  users$: Observable<User []> | undefined;


  constructor(private router: Router,
              private usersService: UsersService,) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        debounceTime(300),
        // ignorer la recherche en cours si c'est la même que la précédente
        distinctUntilChanged(),
        // on retourne la liste des résultats correpsondant aux termes de la recherche
        switchMap((term: string) => this.usersService.searcheUser(term)),
    );
}

gotoDetail(user: User): void {
    let link = ['detail-user', user.id];
    this.router.navigate(link);
}


}
