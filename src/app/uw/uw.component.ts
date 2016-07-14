import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { Fieldset } from '../fieldset';
import { IFormelement } from '../iformelement';
import { ApiService } from '../api.service';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'uw',
  templateUrl: 'uw.component.html',
  styleUrls: ['uw.component.css'],
  directives: [SelectComponent]
})
export class UwComponent implements OnInit, IFormelement {

  name: string = 'uw';
  data: Fieldset;
  title: string = 'UWs';

  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name, this.data);
  }

  forceRefresh(useCache) {
    this.apiService.getUws(useCache)
      .subscribe(
      (data) => { this.data = data },
      (error) => console.error(error),
      () => 'put any debug comments here'
      );
  }

  validate(): boolean {
    return true;
  }
}
