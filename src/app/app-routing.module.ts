import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientmeetingManagementComponent } from './clientmeeting-management/clientmeeting-management.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [ 
  {path: "navbar", component:NavbarComponent},
  {path: "home",  component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "client-management", component:ClientManagementComponent},
  {path: "clientmeeting-management", component:ClientmeetingManagementComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
