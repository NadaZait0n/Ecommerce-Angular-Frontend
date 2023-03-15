import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductService } from './services/productService/product.service';
import { ShowProductComponent } from './Product/show-product/show-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenComponent } from './pages/category/men/men.component';
import { WomenComponent } from './pages/category/women/women.component';
import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './pages/orders/orders.component';
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
    AboutUsComponent,
    ContactUsComponent,
    MenComponent,
    WomenComponent,
    OrdersComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm,faXmark);
  }
}
