import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
@Component({
  moduleId: module.id,
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css'],
  directives: [CheckboxesComponent]
})
export class CountriesComponent implements OnInit {

 @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Ifieldset;
  name: string = 'countries';
  title: string = 'Countries';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountries(true)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh(cache) {
    this.apiService.getCountries(cache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}