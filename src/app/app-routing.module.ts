import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { AddProductComponent } from './components/produits/add-product/add-product.component';
import { CardComponent } from './components/produits/card/card.component';
import { EditProductComponent } from './components/produits/edit-product/edit-product.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { SingleProductComponent } from './components/produits/single-product/single-product.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'produits', component: ProduitsComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'single-product/:id', component: SingleProductComponent },
  {path: 'edit-product/:id', component: EditProductComponent },
  {path: 'cart', component: CardComponent },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
