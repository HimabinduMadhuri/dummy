

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//  import { AddressModule } from './address/address.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AddressModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
 }
 }
