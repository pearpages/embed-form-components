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
  @Input() classes: string;
  private fieldset: Fieldset;
  selectedValues: string[];

  constructor(private formService: FormService) { }

  ngOnInit() { 
    this.getValues();
  }

  toggle() {
    this.fieldset.toggleCurrentBooleanValues();
  }

  areAllSelected() {
    return this.fieldset.haveAllCurrentValuesToTrue();
  }
  
  getButtonText() {
    return this.areAllSelected() ? 'Unselect All' : 'Select All'
  }

  updateValues() {
    this.fieldset.setToTrueTheCurrentValuesHavingThisValues(this.selectedValues);
  }

  isAnySelected():boolean {
    if(this.getValues().length === 0){
      return false;
    } else {
      return this.fieldset.getOutputValues()[0] === false;
    }

  }

  isSelected(value): boolean {
    if(this.getValues().length === 0){
      return false;
    }
    return this.fieldset.getOutputValues().indexOf(value) !== -1
  }

  getValues(): FormValue[] {
    if (this.data === undefined) {
      return [];
    } else {
      if (!this.fieldset) {
        this.fieldset = this.formService.setValue(this.name, this.data);
      }
      return this.fieldset.getinputValues();
    }
  }
}
