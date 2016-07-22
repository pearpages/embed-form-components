import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { RadiosComponent } from '../../core/radios/radios.component';
import { RegionsComponent } from '../../extended/regions/regions.component';
import { CountriesComponent } from '../../extended/countries/countries.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate,valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'regions-set',
  directives: [RadiosComponent,RegionsComponent,CountriesComponent],
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>{{title}}:</h4>
    </div>
    <div class="col-right">
      <radios [class.highlighted]="highlighted" [fieldset]="data" (radiosChange)="onGroupsChange($event)"></radios>
    </div>
  </div>
  <regions></regions>
  <countries></countries>
  `
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