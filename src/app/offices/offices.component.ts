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
    this.apiService.getOffices(true).subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh() {
    this.apiService.getOffices(false)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }
}