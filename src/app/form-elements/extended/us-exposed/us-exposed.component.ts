import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { FormService } from '../../../services/form.service';
import { ApiService } from '../../../services/api.service';
import { Fieldset } from '../../../models/fieldset';
import { valid } from '../../../interfaces/ivalidate';
import { RadiosComponent } from '../../core/radios/radios.component';

@Component({
  moduleId: module.id,
  selector: 'us-exposed',
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>US Exposed</h4>
    </div>
    <div class="col-right">
      <radios [fieldset]="data"></radios>
    </div>
  </div>
  `,
  directives: [RadiosComponent]
})
export class UsExposedComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'us-exposed','US Exposed','getUSexposed');
  }

  validate(f: Fieldset): valid {
    return {
      valid: true,
      error: 'Please select one type of view',
      id: this.name
    };
  }

}
