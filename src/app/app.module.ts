import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { SingleProductComponent } from './components/produits/single-product/single-product.component';
import { AddProductComponent } from './components/produits/add-product/add-product.component';
import { EditProductComponent } from './components/produits/edit-product/edit-product.component';
import { CardComponent } from './components/produits/card/card.component';
import { HeaderComponent } from './components/produits/partials/header/header.component';
import { FooterComponent } from './components/produits/partials/footer/footer.component';
import { HeaderPageComponent } from './components/produits/partials/header-page/header-page.component';
import { QuickViewModalComponent } from './components/produits/partials/modal/quick-view-modal/quick-view-modal.component';
import { AddToCartModalComponent } from './components/produits/partials/modal/add-to-cart-modal/add-to-cart-modal.component';
import { DeleteProductModalComponent } from './components/produits/partials/modal/delete-product-modal/delete-product-modal.component';

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
    DeleteProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
