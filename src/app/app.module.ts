import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {CheckboxModule} from 'primeng/checkbox';     
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChildComponent,
    ParentComponent,
   
   
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    AccordionModule,
    FormsModule,
    ButtonModule,
    HttpModule
    
    
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 
 }
