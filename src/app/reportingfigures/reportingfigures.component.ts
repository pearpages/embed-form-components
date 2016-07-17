import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';
import { Widget } from '../widget';

@Component({
  moduleId: module.id,
  selector: 'reporting-figures',
  template: `<radios [title]="title" [fieldset]="data"></radios>`,
  directives: [RadiosComponent]
})
export class ReportingfiguresComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'reporting-figures', 'Reporting Figures', 'getReportingFigures');
  }

  validate() {
    return true;
  }
}
