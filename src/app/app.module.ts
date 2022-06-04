import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientmeetingManagementComponent } from './clientmeeting-management/clientmeeting-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";



@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientmeetingManagementComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    

  
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateTimePickerModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
