import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { SingleProductComponent } from './components/produits/single-product/single-product.component';
import { AddProductComponent } from './components/produits/add-product/add-product.component';
import { EditProductComponent } from './components/produits/edit-product/edit-product.component';
import { CardComponent } from './components/produits/card/card.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderPageComponent } from './components/partials/header-page/header-page.component';
import { QuickViewModalComponent } from './components/partials/modal/quick-view-modal/quick-view-modal.component';
import { AddToCartModalComponent } from './components/partials/modal/add-to-cart-modal/add-to-cart-modal.component';
import { DeleteProductModalComponent } from './components/partials/modal/delete-product-modal/delete-product-modal.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import {  ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { EditUserDialogComponent } from './components/users/edit-user/edit-user.dialog.component';
import { DeleteUserDialogComponent } from './components/users/delete-user/delete-user.dialog.component';
import { SearchUserComponent } from './components/users/search-user/search-user.component';
import { AddUserDialogComponent } from './components/users/add-user/add-user.dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ProduitsComponent,
    SingleProductComponent,
    AddProductComponent,
    EditProductComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HeaderPageComponent,
    QuickViewModalComponent,
    AddToCartModalComponent,
    DeleteProductModalComponent,
    NotFoundComponent,
    UsersComponent,
    ProjectsComponent,
    AddProjectComponent,
    EditUserDialogComponent,
    DeleteUserDialogComponent,
    SearchUserComponent,
    AddUserDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,

  ],
  entryComponents: [
    AddUserDialogComponent,
    EditUserDialogComponent,
    DeleteUserDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
