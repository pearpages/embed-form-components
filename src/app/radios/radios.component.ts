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

  values: Fieldset;

  constructor(private formService: FormService) {
    this.values = new Fieldset([
      new FormValue('value1','name1',true,false,false),
      new FormValue('value2','name2',true,false,true),
      new FormValue('value3','name3',true,false,true),
      new FormValue('value4','name4',true,false,false)
    ],false);
    this.formService.setValue('myRadios',this.values);
  }

  ngOnInit() {
  }

  getValues(): FormValue[] {
    return this.values.getinputValues();
  }

  updateValue(value: FormValue) {
    this.getValues().forEach((e) => {
      e.current = false;
    });
    value.current = true;
  }

  isChecked(value: FormValue) {
    return value.getValue() === this.values.getOutputValues()[0]
  }
}
