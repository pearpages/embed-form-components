import { Component, OnInit, Input } from '@angular/core';
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

  @Input() multiple: boolean;
  @Input() name: string;
  @Input() data: string;
  values: Fieldset;
  current: string;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.values = this.formService.setValue(this.name,this.data);
  }

  toggle() {
    let values = this.values.getinputValues();
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
    return this.values.getinputValues().reduce((previous, current) => {
      return (previous && (current.getValue() === current.current));
    }, true);
  }

  updateValues() {
    let values = this.values.getinputValues();
      values.forEach((val) => {
        val.current = (this.current.indexOf(val.getValue()) !== -1) ? val.getValue() : false;
      });
  }

  isSelected(value):boolean {
    return this.values.getOutputValues().indexOf(value) !== -1
  }

}
