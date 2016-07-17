import { Component } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Widget } from '../abstract/widget';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  template: `<checkboxes [title]="title" [fieldset]="data"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'company-type','Company Type','getCompanyTypes');
  }

  validate():boolean {
    return true;
  }
}
