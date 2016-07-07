import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { Fieldset } from '../fieldset';
import { Ifieldset } from '../ifieldset';
import { FormValue } from '../form-value';

@Component({
  moduleId: module.id,
  selector: 'radios',
  templateUrl: 'radios.component.html',
  styleUrls: ['radios.component.css']
})
export class RadiosComponent implements OnInit {

  @Input() name: string;
  @Input() data: Ifieldset;
  @Input() title: string;

  values: Fieldset;

  constructor(private formService: FormService) {}

  ngOnInit() { 
    this.getValues();
  }

  updateValue(value: FormValue) {
    this.getValues().forEach((e) => {
      e.current = false;
    });
    value.current = true;
  }

  isChecked(value: FormValue) {
    if(this.getValues().length === 0){
      return  false;
    }
    return value.getValue() === this.values.getOutputValues()[0]
  }

  getValues(): FormValue[] {
    if (this.data === undefined) {
      return [];
    } else {
      if(!this.values) {
        this.values = this.formService.setValue(this.name,this.data);
      }
      return this.values.getinputValues();
    }
  }
}
