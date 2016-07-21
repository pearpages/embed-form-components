import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { SelectComponent } from '../../core/select/select.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { valid } from '../../../interfaces/ivalidate';
import { Fieldset } from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'operations',
  templateUrl: 'operations.component.html',
  styleUrls: ['operations.component.css'],
  directives: [SelectComponent]
})
export class OperationsComponent extends Widget {

  selectedSet: string;

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'operations','Operations','getOperations');
  }

  getSets(): String[] {
    return [].concat(['All'],this.data.set.getLabels());
  }

  updateSelectedSet(set:string) {
    this.selectedSet = set;
  }

  getClasses(set:string): string[] {
    let classes = ['btn','btn-default','btn-sm'];
    if(set === this.selectedSet){
      classes.push('active');
    }
    return classes;
  }

  validate(f:Fieldset):valid {
    return {
      valid:true,
      error: 'please select one Operation',
      id: this.name
    };
  }

}
