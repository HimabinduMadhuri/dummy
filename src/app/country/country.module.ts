import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';


@NgModule({
  declarations: [CountryComponent, CountryListComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { 
  constructor() {
    console.log('CountryModule loaded.');
  }

}
