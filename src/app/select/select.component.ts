import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { Fieldset } from '../fieldset';
import { Ifieldset } from '../ifieldset';
import { FormValue } from '../form-value'

@Component({
  moduleId: module.id,
  selector: 'my-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() multiple: boolean;
  @Input() name: string;
  @Input() data: Ifieldset;
  values: Fieldset;
  current: string;

  constructor(private formService: FormService) { }

  ngOnInit() { 
    this.getValues();
  }

  toggle() {
    let values = this.getValues();
    if (this.areAllSelected()) {
      values.forEach((value) => {
        value.current = false;
      });
    } else {
      values.forEach((value) => {
        value.current = value.getValue();
      });
    }
  }

  areAllSelected() {
    return this.getValues().reduce((previous, current) => {
      return (previous && (current.getValue() === current.current));
    }, true);
  }

  updateValues() {
    let values = this.getValues();
    values.forEach((val) => {
      val.current = (this.current.indexOf(val.getValue()) !== -1) ? val.getValue() : false;
    });
  }

  isAnySelected():boolean {
    if(this.getValues().length === 0){
      return false;
    } else {
      return this.values.getOutputValues()[0] === false;
    }

  }

  isSelected(value): boolean {
    if(this.getValues().length === 0){
      return false;
    }
    return this.values.getOutputValues().indexOf(value) !== -1
  }

  getValues(): FormValue[] {
    if (this.data === undefined) {
      return [];
    } else {
      if (!this.values) {
        this.values = this.formService.setValue(this.name, this.data);
      }
      return this.values.getinputValues();
    }
  }
}
