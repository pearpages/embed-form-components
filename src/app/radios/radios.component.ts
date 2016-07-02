import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Fieldset } from '../fieldset';
import { FormValue } from '../form-value';

@Component({
  moduleId: module.id,
  selector: 'radios',
  templateUrl: 'radios.component.html',
  styleUrls: ['radios.component.css']
})
export class RadiosComponent implements OnInit {

  values;

  constructor(private formService: FormService) {
    this.values = new Fieldset([
      new FormValue('value1','name1',false,false),
      new FormValue('value2','name2',false,true),
      new FormValue('value3','name3',false,true),
      new FormValue('value4','name4',false,false)
    ],false,false,'value1');
    this.formService.setValue('myRadios',this.values);
  }

  ngOnInit() {
  }

}
