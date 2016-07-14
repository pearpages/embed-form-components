import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  templateUrl: 'companytype.component.html',
  styleUrls: ['companytype.component.css'],
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent implements OnInit, IFormelement {

  data: Fieldset;
  name: string = 'company-type';
  title: string = 'Company Type';

  constructor(private apiService: ApiService, private form: FormService) {}

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache:boolean = false ):void {
    this.apiService.getCompanyTypes(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

  validate():boolean {
    return true;
  }
}
