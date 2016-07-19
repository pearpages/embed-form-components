import { Component } from '@angular/core';
import { CheckboxesComponent } from '../../core/checkboxes/checkboxes.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Widget } from '../../../abstract/widget';
import { Ivalidate,valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  template: `<checkboxes [class.highlighted]="highlighted" [title]="title" [fieldset]="data"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'company-type','Company Type','getCompanyTypes');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select a company type'};
  }
}
