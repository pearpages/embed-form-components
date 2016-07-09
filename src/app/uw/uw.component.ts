import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { Ifieldset } from '../Ifieldset';
import { IFormelement } from '../iformelement';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'uw',
  templateUrl: 'uw.component.html',
  styleUrls: ['uw.component.css'],
  directives: [SelectComponent]
})
export class UwComponent implements OnInit, IFormelement {

  name: string = 'uw';
  data: Ifieldset;
  title: string = 'UWs';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUws(true)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );     
  }

  forceRefresh() {
    
  }

}
