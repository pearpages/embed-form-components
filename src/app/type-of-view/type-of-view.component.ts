import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Fieldset } from '../models/fieldset';
import { valid } from '../interfaces/ivalidate';
import { RadiosComponent } from '../radios/radios.component';

@Component({
  moduleId: module.id,
  selector: 'type-of-view',
  templateUrl: 'type-of-view.component.html',
  directives: [RadiosComponent]
})
export class TypeOfViewComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'type-of-view','Type of View','getTypesOfView');
  }

  validate(f: Fieldset) {
    return {
      valid: true,
      error: 'Please select one type of view',
      id: 'type-of-view'
    };
  }
}
