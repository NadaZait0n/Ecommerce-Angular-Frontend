import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {  CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductService } from './services/productService/product.service';
import { ShowProductComponent } from './Product/show-product/show-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MenComponent } from './pages/category/men/men.component';
import { WomanComponent } from './pages/category/woman/woman.component';
import { SearchPipe } from './pipes/search.pipe';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { LengthPipe } from './pipes/length.pipe';
import { CheckoutComponent } from './pages/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ShowProductComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    CartComponent,
    MenComponent,
    WomanComponent,
    SearchPipe,
    LengthPipe,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, Ng2SearchPipeModule, ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
