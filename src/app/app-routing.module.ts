import { AddressComponent } from './address/address.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddressModule } from './address/address.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
                   
      
  },
  {path:'person' , loadChildren: () => import('./person/person.module').then(m => m.PersonModule) },
  {path:'address'  , component:AddressComponent ,loadChildren: () => import('./address/address.module').then(m => m.AddressModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
     },
     {
      path: '**',
      component: PageNotFoundComponent 
       }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes , 
    {
      // preloadingStrategy: PreloadAllModules
    
    } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
