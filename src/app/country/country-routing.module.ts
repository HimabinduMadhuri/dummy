import { CountryComponent } from './country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';


const routes: Routes = [
  {path:"" , component:CountryComponent , children:[

  {path:"country-list" , component:CountryListComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
