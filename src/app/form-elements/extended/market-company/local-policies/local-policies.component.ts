import { Component } from '@angular/core';
import { Widget } from '../../../../abstract/widget';
import { FormService } from '../../../../services/form.service';
import { ApiService } from '../../../../services/api.service';
import { Fieldset } from '../../../../models/fieldset';
import { valid } from '../../../../interfaces/ivalidate';
import { RadiosComponent } from '../../../core/radios/radios.component';

@Component({
  moduleId: module.id,
  selector: 'local-policies',
  template: `<radios [fieldset]="data"></radios>`,
  directives: [RadiosComponent]
})
export class LocalPoliciesComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'local-policies','','getLocalPolicies');
  }

  validate(f:Fieldset): valid {
    return {valid:true,error: 'Please select at least one local-policises'};
  }

}
