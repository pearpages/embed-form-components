import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'countries',
  template: `<checkboxes [class.highlighted]="highlighted" [fieldset]="data" [title]="title"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class CountriesComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'countries', 'Countries', 'getCountries');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select at least one country'};
  }

}