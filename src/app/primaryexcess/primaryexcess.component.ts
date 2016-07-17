import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { RadiosComponent } from '../radios/radios.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  template: `<radios [title]="title" [fieldset]="data"></radios>`,
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'primary-excess','Primary/Excess','getPrimaryExcess');
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: ''};
  }
}