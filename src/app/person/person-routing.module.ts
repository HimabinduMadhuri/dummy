import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:PersonComponent ,
  children:[{
    path:"person-list" , component:PersonListComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
  constructor() {
    console.log('PersonModule loaded.');
  }
 }
