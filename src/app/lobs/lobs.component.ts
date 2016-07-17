import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';


@Component({
  moduleId: module.id,
  selector: 'lobs',
  template: `<checkboxes [title]="title" [fieldset]="data"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class LobsComponent extends Widget {

  constructor(protected apiService: ApiService,protected form: FormService) {
    super(apiService,form,'lobs','UW LOB','getLobs');
   }

  validate(f: Fieldset):valid {
    return {valid:true,error: ''};
  }
}