import { CounteryService } from './../../services/countery.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  CountryList:Observable<Country[]>

  constructor(private countryService:CounteryService) { }

  ngOnInit(){
    this.CountryList =this.countryService.getCountries();
  }

}
