import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Fieldset } from '../fieldset';
import { FormValue } from '../form-value'

@Component({
  moduleId: module.id,
  selector: 'my-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class SelectComponent implements OnInit {

  values: Fieldset;
  current: string;

  constructor(private formService: FormService) {
    this.formService.setValue('mySelect',new Fieldset([new FormValue('value1','name1',false,'value1'),new FormValue('value2','name2',false,false),new FormValue('value3','name3',false,false)],true));
    this.values = this.formService.getValue('mySelect');    
  }

  ngOnInit() {

  }

  toggle() {
    let values = this.values.getinputValues();
    if (this.areAllSelected()) {
      values.forEach((value) => {
        value.current = false;
      });
    } else {
      values.forEach((value) => {
        value.current = value.value;
      });
    }
  }

  areAllSelected() {
    return this.values.getinputValues().reduce((previous,current) => {
        return (previous && (current.value === current.current));
    },true);
  }

  updateValues() {
    let values = this.values.getinputValues();
    values.forEach((val) => {
      val.current = (this.current.indexOf(val.value) !== -1) ? val.value : false;
    });
  }
  
}
