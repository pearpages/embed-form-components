import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
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
  data: Ifieldset;
  name: string;
  title: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.title = 'Company Type';
    this.name = 'company-type';

    this.apiService.getCompanyTypes(true).subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh() {
    this.apiService.getCompanyTypes(false)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

}
