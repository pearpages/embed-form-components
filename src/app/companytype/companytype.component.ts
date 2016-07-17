import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';
import { Widget } from '../widget';

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
