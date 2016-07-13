import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
@Component({
  moduleId: module.id,
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css'],
  directives: [CheckboxesComponent]
})
export class CountriesComponent implements OnInit, IFormelement {

 @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Fieldset;
  name: string = 'countries';
  title: string = 'Countries';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getCountries(useCache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  validate():boolean {
    return true;
  }

}