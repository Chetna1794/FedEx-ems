import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceComponent } from './services/common-service.service';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CommonServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
