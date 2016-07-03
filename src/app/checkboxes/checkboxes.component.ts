import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormValue } from '../form-value';
import { Fieldset } from '../fieldset';

@Component({
  moduleId: module.id,
  selector: 'checkboxes',
  templateUrl: 'checkboxes.component.html',
  styleUrls: ['checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  values;

  constructor(private formService: FormService) {

    let fieldset = new Fieldset([
      new FormValue('value1','name1',false,false),
      new FormValue('value2','name2',false,true),
      new FormValue('value3','name3',false,true),
      new FormValue('value4','name4',false,false)
    ],true);
    this.values = fieldset.getinputValues();
    this.formService.setValue('myCheckboxes',fieldset);
  }

  ngOnInit() {  

  }

  protected allChecked() {
    return this.values.reduce((previous,current) => {
      return current.current && previous;
    }, true);
  }

  toggle() {
    var status = true;
    if(this.allChecked()){
      status = false;
    }
    this.values.map((e) => {
      e.current = status;
      return e;
    });
  }
}