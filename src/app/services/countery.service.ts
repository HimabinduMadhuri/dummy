import { Injectable } from '@angular/core';
import { Country } from '../country/country';
import { Observable, of } from 'rxjs';
const Countries =[

  new Country(1, 'India', 'New Delhi', 'INR'),
  new Country(2, 'China', 'Beijing', 'RMB')
];
let CountryList = of(Countries);


@Injectable({
  providedIn: 'root'
})
export class CounteryService {

  constructor() { }
  getCountries():Observable<Country[]>{
    return CountryList;
  }
}
