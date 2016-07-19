import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { CheckboxesComponent } from '../../core/checkboxes/checkboxes.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate,valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';


@Component({
  moduleId: module.id,
  selector: 'lobs',
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>{{title}}:</h4>
    </div>
    <div class="col-right">
      <checkboxes [class.highlighted]="highlighted" [fieldset]="data"></checkboxes>
    </div>
  </div>
  `,
  directives: [CheckboxesComponent]
})
export class LobsComponent extends Widget {

  constructor(protected apiService: ApiService,protected form: FormService) {
    super(apiService,form,'lobs','UW LOB','getLobs');
   }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select at least one lob'};
  }
}