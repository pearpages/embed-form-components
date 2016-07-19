import { Component } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { CheckboxesComponent } from '../../core/checkboxes/checkboxes.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { Ivalidate, valid } from '../../../interfaces/ivalidate';
import { Fieldset} from '../../../models/fieldset';


@Component({
  moduleId: module.id,
  selector: 'regions',
  template: `
  <div class="fieldset">
    <div class="col-left">
      <h4>{{title}}:</h4>
    </div>
    <div class="col-right">
      <checkboxes [class.highlighted]="highlighted" [fieldset]="data" (checkboxesChange)="updateCountries($event)"></checkboxes>
    </div>
  </div>
  `,
  directives: [CheckboxesComponent]
})
export class RegionsComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'regions', 'Regions', 'getRegions');
  }

  updateCountries(event) {
    let countries = this.getCountriesData();
    if(countries){
      countries.set.hideAll();
    }
    this.showCountries(event.value);
    this.uncheckCountries();
  }

  validate(f: Fieldset): valid {
    return { valid: true, error: 'Please selsect at least one region' };
  }

  private getCountriesData(): Fieldset {
    return this.form.getValue('countries');
  }

  private showCountries(selectedRegions) {
    if (selectedRegions[0] !== false) {
      selectedRegions.forEach((regionSet) => {
        let countries = this.getCountriesData();
        if(countries){
          countries.set.getSet(regionSet).show();
        }
      });
    }
  }

  private uncheckCountries() {
    let countries = this.getCountriesData();
    if (countries) {
      countries.set.getHiddenSets().forEach((set) => {
        set.setFalse();
      });
    }
  }
}