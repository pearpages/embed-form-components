import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { SelectComponent } from '../select/select.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'uw',
  template: `<my-select [class.highlighted]="highlighted" 
  [fieldset]="data" [classes]="'uws'" [title]="title" [multiple]="true"></my-select>`,
  directives: [SelectComponent]
})
export class UwComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'uws', 'UWs', 'getUws');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select at least one UW'};
  }
}
