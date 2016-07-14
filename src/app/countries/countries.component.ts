import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css'],
  directives: [CheckboxesComponent]
})
export class CountriesComponent implements OnInit, IFormelement {

  data: Fieldset;
  name: string = 'countries';
  title: string = 'Countries';

  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getCountries(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  validate():boolean {
    return true;
  }

}