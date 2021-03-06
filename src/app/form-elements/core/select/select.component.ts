import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { Fieldset } from '../../../models/fieldset';
import { FormValue } from '../../../models/form-value'

@Component({
  moduleId: module.id,
  selector: 'my-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() multiple: boolean;
  @Input() title: string;
  @Input() fieldset: Fieldset;
  @Input() classes: string;
  @Input() hasSelectAllButton: boolean = true;
  selectedValues: string[];

  constructor(private formService: FormService) { }

  ngOnInit() { 
    this.getValues();
  }

  toggle() {
    this.fieldset.toggleCurrentBooleanValues();
  }

  areAllSelected() {
    if(this.fieldset){
      return this.fieldset.haveAllCurrentValuesToTrue();
    } else {
      return false;
    }
  }
  
  getButtonText() {
    return this.areAllSelected() ? 'Unselect All' : 'Select All'
  }

  hasSets():boolean {
    return (this.fieldset.set.getLabels().length > 0);
  }

  getOptions(label:string): FormValue[] {
    return this.fieldset.set.getSet(label).getFormValues();
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
    if (this.fieldset === undefined) {
      return [];
    } else {
      return this.fieldset.getinputValues();
    }
  }
}
