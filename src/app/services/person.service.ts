import { Injectable } from '@angular/core';
import { Person } from '../person';
import{of, Observable} from 'rxjs';
const Persons=[
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),  
  new Person(3, 'Kishna', 'Mathura')

];
let PersonsList = of(Persons);

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  getPersons():Observable<Person[]>{
    return PersonsList;
    
  }
}
