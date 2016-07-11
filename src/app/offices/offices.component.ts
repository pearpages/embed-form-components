import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';

@Component({
  moduleId: module.id,
  selector: 'offices',
  templateUrl: 'offices.component.html',
  styleUrls: ['offices.component.css'],
  directives: [CheckboxesComponent]
})
export class OfficesComponent implements OnInit, IFormelement {

  @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Ifieldset;
  name: string = 'offices'
  title: string = 'Office';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getOffices(useCache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }
}