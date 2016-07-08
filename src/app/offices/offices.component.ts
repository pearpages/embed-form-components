import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'offices',
  templateUrl: 'offices.component.html',
  styleUrls: ['offices.component.css'],
  directives: [CheckboxesComponent]
})
export class OfficesComponent implements OnInit {

  data: Ifieldset;
  name: string;
  title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.title = 'Office';
    this.name = 'offices';

    this.apiService.getOffices().subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}