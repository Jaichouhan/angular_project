import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { ApiDataComponent } from './api-data/api-data.component';
import { AllAPiService } from 'src/services/all-api.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ApiDataComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AllAPiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
