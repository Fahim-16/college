import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentnameComponent } from './departmentname/departmentname.component';
import { FacultyComponent } from './faculty/faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentnameComponent,
    FacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
