import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { RadiosComponent } from '../radios/radios.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';


@Component({
  moduleId: module.id,
  selector: 'region-set',
  template: `<radios [class.highlighted]="highlighted" [title]="title" 
  [fieldset]="data" (radiosChange)="onGroupsChange($event)"></radios>`,
  directives: [RadiosComponent]
})
export class RegionsSetComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) { 
    super(apiService,form,'regions-set','Regions Set','getRegionsSets');
  }

  onGroupsChange(event) {
    let groupid = event.value[0];
    if(this.form.hasValue('regions')){
      let regions = this.form.getValue('regions');
      regions.setToFalseAllCurrentValues();
      if(groupid === false) {
        regions.set.hideAll();
      } else {
        regions.set.showOnlyThisSet(groupid);
      }
    }
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: 'Please select a region set type'};
  }

}