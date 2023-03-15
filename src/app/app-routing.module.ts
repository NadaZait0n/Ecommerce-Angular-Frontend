import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ShowProductComponent } from './Product/show-product/show-product.component';
import {MenComponent} from "./pages/category/men/men.component";
import {WomanComponent} from "./pages/category/woman/woman.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/orders/orders.component';



const routes: Routes = [
  {path:'checkout',component:CheckoutComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'details',component:DetailsComponent},
  {path:'register',component:RegistrationComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'product',component:ShowProductComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'men',component:MenComponent},
  {path:'woman',component:WomanComponent},
  {path:'orders',component:OrdersComponent},

  {path:'',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
