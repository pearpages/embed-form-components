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
    this.forceRefresh(true);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getLobs(useCache)
    .subscribe(
      (data) => {this.checkboxes.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}