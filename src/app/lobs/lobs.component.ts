import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'lobs',
  templateUrl: 'lobs.component.html',
  styleUrls: ['lobs.component.css'],
  directives: [CheckboxesComponent]
})
export class LobsComponent implements OnInit, IFormelement {

  data: Fieldset;
  name: string = 'lobs';
  title: string = 'UW LOB';

  constructor(private apiService: ApiService,private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getLobs(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  validate() {
    return true;
  }
}