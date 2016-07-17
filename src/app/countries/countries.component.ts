import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';

@Component({
  moduleId: module.id,
  selector: 'countries',
  template: `<checkboxes [fieldset]="data" [title]="title"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class CountriesComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'countries', 'Countries', 'getCountries');
  }

  validate(): boolean {
    return true;
  }

}