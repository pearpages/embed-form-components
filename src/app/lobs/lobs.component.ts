import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';


@Component({
  moduleId: module.id,
  selector: 'lobs',
  templateUrl: 'lobs.component.html',
  styleUrls: ['lobs.component.css'],
  directives: [CheckboxesComponent]
})
export class LobsComponent implements OnInit, IFormelement {

  @ViewChild(CheckboxesComponent) checkboxes: CheckboxesComponent;
  data: Ifieldset;
  name: string = 'lobs';
  title: string = 'UW LOB';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getLobs(true)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh(cache) {
    this.apiService.getLobs(cache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}