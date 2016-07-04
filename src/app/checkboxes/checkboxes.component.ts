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
      new FormValue('value1','name1',true,false,false),
      new FormValue('value2','name2',true,false,true),
      new FormValue('value3','name3',true,false,true),
      new FormValue('value4','name4',true,false,false),
      new FormValue('value5','name5',false,false,false),
      new FormValue('value6','name6',false,false,false),
      new FormValue('value7','name7',false,false,false),
      new FormValue('value8','name8',false,false,false),
      new FormValue('value9','name9',false,false,false),
      new FormValue('value10','name10',false,false,false),
      new FormValue('value11','name11',false,false,false),
      new FormValue('value12','name12',false,false,false)
    ],true);

    fieldset.defineSet('one',['value1','value2','value3','value4'])
      .defineSet('two',['value5','value6','value7'])
      .defineSet('three',['value8','value9','value10','value11','value12']);
    this.values = fieldset.getinputValues();
    this.formService.setValue('myCheckboxes',fieldset);
  }

  ngOnInit() {  

  }

  protected allChecked() {
    let values = this.values.filter((e) => {return e.visible === true});
    if(values.length === 0){
      return true;
    }
    return values.reduce((previous,current) => {
      return current.current && previous;
    }, true);
  }

  toggle() {
    var status = true;
    if(this.allChecked()){
      status = false;
    }
    this.values.filter((e)=> { return e.visible === true}).forEach((e) => { e.current = status });
  }
}