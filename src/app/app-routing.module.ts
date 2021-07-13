import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { EditProductComponent } from './components/produits/edit-product/edit-product.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},

  {path: 'signin', component: SigninComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'add-project', component: AddProjectComponent},
  {path: 'edit-product/:id', component: EditProductComponent },
  {path: 'users', component: UsersComponent },
  {path: 'edit-user', component: EditUserComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
