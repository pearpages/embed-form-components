import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { SelectComponent } from '../select/select.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';

@Component({
  moduleId: module.id,
  selector: 'uw',
  template: `<my-select [fieldset]="data" [classes]="'uws'" [title]="title" [multiple]="true"></my-select>`,
  directives: [SelectComponent]
})
export class UwComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'uws', 'UWs', 'getUws');
  }

  validate(): boolean {
    return true;
  }
}
