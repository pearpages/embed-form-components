import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  templateUrl: 'companytype.component.html',
  styleUrls: ['companytype.component.css'],
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent implements OnInit, IFormelement {

  @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Fieldset;
  name: string = 'company-type';
  title: string = 'Company Type';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache:boolean = false ):void {
    this.apiService.getCompanyTypes(useCache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

  validate():boolean {
    return true;
  }
}
