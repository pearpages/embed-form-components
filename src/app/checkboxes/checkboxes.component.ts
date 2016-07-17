import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormValue } from '../models/form-value';
import { Fieldset } from '../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'checkboxes',
  templateUrl: 'checkboxes.component.html'
})
export class CheckboxesComponent implements OnInit {

  @Input() fieldset: Fieldset; 
  @Input() title: string;
  @Output() checkboxesChange = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
    this.getValues();
  }

  protected allChecked() {
    return (this.fieldset) ? this.fieldset.haveAllCurrentValuesToTrue() : false;
  }

  toggle() {
    (this.fieldset) ? this.fieldset.toggleCurrentBooleanValues() : 'do nothing';
    this.tellParents();
  }

  updateValue(value: FormValue) {
    value.current = !value.current;
    this.tellParents();
  }

  getButtonText() {
    return this.allChecked() ? 'Uncheck All' : 'Check All';
  }

  tellParents() {
    this.checkboxesChange.emit({value: this.fieldset.getOutputValues()});
  }

  getValues(): FormValue[] {
    if (this.fieldset === undefined) {
      return [];
    } 
    return this.fieldset.getinputValues();
  }
}