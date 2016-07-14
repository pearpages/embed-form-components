import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'offices',
  templateUrl: 'offices.component.html',
  styleUrls: ['offices.component.css'],
  directives: [CheckboxesComponent]
})
export class OfficesComponent implements OnInit, IFormelement {

  @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Fieldset;
  name: string = 'offices'
  title: string = 'Office';

  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getOffices(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

  validate(){
    return true;
  }
}