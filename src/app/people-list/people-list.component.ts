import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people = [
    {
      firstName : "Marco",
      lastName : "POLO",
      phoneNo : "012356487",
    },
    {
      firstName : "Dark",
      lastName : "VADOR",
      phoneNo : "0077556699",
    },
    {
      firstName : "Friendly",
      lastName : "PEOPLE",
      phoneNo : "1122336699",
    }
  ]
  constructor() { }

    ngOnInit(): void {
  }

  deletePerson (i) {
    this.people.splice(i,1);
  }

}
