import { Component } from '@angular/core';
import { Widget } from '../abstract/widget';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Ivalidate,valid } from '../interfaces/ivalidate';
import { Fieldset} from '../models/fieldset';


@Component({
  moduleId: module.id,
  selector: 'regions',
  template: `<checkboxes [fieldset]="data" [title]="title" (checkboxesChange)="updateCountries($event)"></checkboxes>`,
  directives: [CheckboxesComponent]
})
export class RegionsComponent extends Widget {

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService,form,'regions','Regions','getRegions');
   }

  updateCountries(event) {
    this.getCountriesData().set.hideAll();
    this.showCountries(event.value);
    this.uncheckCountries();
  }

  validate(f: Fieldset):valid {
    return {valid:true,error: ''};
  }

  private getCountriesData(): Fieldset {
    return this.form.getValue('countries');
  }

  private showCountries(selectedRegions) {
    if (selectedRegions[0] !== false) {
      selectedRegions.forEach((regionSet) => {
        this.getCountriesData().set.getSet(regionSet).show();
      });
    }
  }

  private uncheckCountries() {
    this.getCountriesData().set.getHiddenSets().forEach((set) => {
      set.setFalse();
    });
  }
}