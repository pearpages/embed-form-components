import { Component, OnInit, Input } from '@angular/core';
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

  @Input() name: string;
  @Input() data: string;
  @Input() title: string;

  values: Fieldset;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.values = this.formService.setValue(this.name,this.data);
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
