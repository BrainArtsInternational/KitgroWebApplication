import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '../../node_modules/@angular/core';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  // { path: '' , component: HomeComponent},
  // { path: 'home', component: HomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'store', component: StoreComponent, data: { title: 'storeDetails'}},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'shoping-cart', component: ShoppingCartComponent},
  { path: '**', redirectTo: '' } 


];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
