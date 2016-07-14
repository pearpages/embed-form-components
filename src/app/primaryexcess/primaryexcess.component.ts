import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  templateUrl: 'primaryexcess.component.html',
  styleUrls: ['primaryexcess.component.css'],
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent implements OnInit, IFormelement {

  @ViewChild(RadiosComponent) radios: RadiosComponent;
  data: Fieldset;
  name: string = 'primary-excess';
  title: string = 'Primary/Excess';
  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) {
    this.apiService.getPrimaryExcess(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  validate():boolean{
    return true;
  } 
}