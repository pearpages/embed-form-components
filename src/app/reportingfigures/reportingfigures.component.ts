import { Component } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Widget } from '../abstract/widget';

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
