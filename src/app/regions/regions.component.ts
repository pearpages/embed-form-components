import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';
import { Fieldset } from '../fieldset';

@Component({
  moduleId: module.id,
  selector: 'regions',
  templateUrl: 'regions.component.html',
  styleUrls: ['regions.component.css'],
  directives: [CheckboxesComponent]
})
export class RegionsComponent implements OnInit, IFormelement {

  data: Fieldset;
  name: string = 'regions';
  title: string = 'Regions';

  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getRegions(useCache)
      .subscribe(
      (data) => { this.data = data; },
      (error) => console.error(error),
      () => 'put any debug comments here'
      );
  }

  updateCountries(event) {
    this.getCountriesData().set.hideAll();
    this.showCountries(event.value);
    this.uncheckCountries();
  }

  validate():boolean {
    return true;
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