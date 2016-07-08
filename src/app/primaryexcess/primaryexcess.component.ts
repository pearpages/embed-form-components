import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  templateUrl: 'primaryexcess.component.html',
  styleUrls: ['primaryexcess.component.css'],
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent implements OnInit, IFormelement {

  @ViewChild(RadiosComponent) radios: RadiosComponent;
  data: Ifieldset;
  name: string = 'primary-excess';
  title: string = 'Primary/Excess';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPrimaryExcess(true).subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh() {
    this.apiService.getPrimaryExcess(false)
    .subscribe(
      (data) => {this.radios.forceRefresh= true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}