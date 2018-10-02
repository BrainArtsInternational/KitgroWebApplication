import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '../../node_modules/@angular/core';

const routes: Routes = [
  // { path: '' , component: HomeComponent},
  // { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
