import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'regions',
  templateUrl: 'regions.component.html',
  styleUrls: ['regions.component.css'],
  directives: [CheckboxesComponent]
})
export class RegionsComponent implements OnInit {

  @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Ifieldset;
  name: string = 'regions';
  title: string = 'Regions';

  constructor(private apiService: ApiService,private formService: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache:boolean = false) {
    this.apiService.getRegions(useCache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = !useCache; this.data = data;},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  updateCountries(event){
      let countries = this.formService.getValue('countries');
      countries.hideAllSets();
      event.value.forEach((value) => {
        countries.showSet(value);
      });
  }
}