import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {CheckboxModule} from 'primeng/checkbox';               

import { Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cities:string[]=['New York','Chennai','US','UK'];
  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  checked: boolean = false;
  public isChecked = false;
  
  public onCheckboxChange(isChecked: boolean) {
    console.log("isChecked", isChecked);
    this.isChecked = isChecked;
  }
 deleteCities() {
console.log("Hello from deleteCities");
for(let city in this.selectedCities)
{
  console.log("City index", city);
  const index: number = this.cities.indexOf(this.selectedCities[city]);
  if (index !== -1) {
    console.log("Matching city", city);
      this.cities.splice(index, 1);
  }
  console.log("Cities after deletion", this.cities);
}        
}

 }
 

