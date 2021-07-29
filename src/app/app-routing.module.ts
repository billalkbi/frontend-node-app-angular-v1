import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { EditProductComponent } from './components/produits/edit-product/edit-product.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddUserDialogComponent } from './components/users/add-user/add-user.dialog.component';
import { DeleteUserDialogComponent } from './components/users/delete-user/delete-user.dialog.component';
import { EditUserDialogComponent } from './components/users/edit-user/edit-user.dialog.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'add-project', component: AddProjectComponent},
  {path: 'edit-product/:id', component: EditProductComponent },
  {path: 'users', component: UsersComponent },
  {path: 'add-user', component: AddUserDialogComponent},
  {path: 'edit-user/:id', component: EditUserDialogComponent},
  {path: 'delete-user/:id', component: DeleteUserDialogComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
