import { Component } from '@angular/core';
import { RadiosComponent } from '../../core/radios/radios.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Widget } from '../../../abstract/widget';
import { Ivalidate, valid } from '../../../interfaces/ivalidate';
import { Fieldset } from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'reporting-figures',
  template: `<radios [class.highlighted]="highlighted" [title]="title" [fieldset]="data"></radios>`,
  directives: [RadiosComponent]
})
export class ReportingfiguresComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'reporting-figures', 'Reporting Figures', 'getReportingFigures');
  }

  validate(f: Fieldset): valid {
      var res = { valid: false, error: `Please select either "Net of Fac Out or Gross of Fac Out"` };

      if (f.getOutputValues()[0] != false) {
        res.valid = true;
      }
      
      return res;
  }

}
