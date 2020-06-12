import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:Observable<Person[]>

  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.persons = this.personService. getPersons();
  }

}
