import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { SelectComponent } from '../../core/select/select.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate,valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'uw',
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>{{title}}:</h4>
    </div>
    <div class="col-right">
      <my-select [class.highlighted]="highlighted" [fieldset]="data" [classes]="'wide'" [multiple]="true"></my-select>
    </div>
  </div>
  `,
  directives: [SelectComponent]
})
export class UwComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'uws', 'UWs', 'getUws');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select at least one UW'};
  }
}
