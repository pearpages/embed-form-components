import { Component, OnChanges } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { CheckboxesComponent } from '../../core/checkboxes/checkboxes.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate, valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'countries',
  template: `
  <h4>Countries</h4>
  <label (click)="setType('ALL')" >All <input type="radio" [checked]="type === 'ALL'"/></label>
  <label (click)="setType('CUSTOM')" >Custom<input type="radio" [checked]="type === 'CUSTOM'"/></label>
  <checkboxes *ngIf="type==='CUSTOM'" [class.highlighted]="highlighted" [fieldset]="data" ></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class CountriesComponent extends Widget {

  type: string;

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'countries', 'Countries', 'getCountries');
  }

  setType(value: string) {
    if (value === 'ALL') {
      if (this.form.hasValue('regions')) {
        let regions = this.form.getValue('regions').getOutputValues();
        if (regions[0] !== false) {
          regions.forEach((region) => {
            this.data.set.getSet(region).setTrue();
          });
        }
      }
    } else if (value === 'CUSTOM') {
      this.data.setToFalseAllCurrentValues();
    }
    this.type = value;
  }

  ngOnChanges() {
    console.log(this);
  }

  validate(f: Fieldset): valid {
    return { valid: true, error: 'Please select at least one country' };
  }

}