import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceComponent } from './services/common-service.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { ManagerViewComponent } from './manager/manager-view/manager-view.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeViewComponent,
    ManagerViewComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CommonServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
