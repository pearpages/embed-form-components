import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { RadiosComponent } from '../../core/radios/radios.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate,valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>{{title}}:</h4>
    </div>
    <div class="col-right">
      <radios [class.highlighted]="highlighted" [fieldset]="data"></radios>
    </div>
  </div>
  `,
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'primary-excess','Primary/Excess','getPrimaryExcess');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please selecet Primary or Excess'};
  }
}