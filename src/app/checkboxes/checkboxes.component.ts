import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormService } from '../form.service';
import { FormValue } from '../form-value';
import { Fieldset } from '../fieldset';
import { Ifieldset } from '../ifieldset';

@Component({
  moduleId: module.id,
  selector: 'checkboxes',
  templateUrl: 'checkboxes.component.html',
  styleUrls: ['checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  @Input() data: Fieldset; 
  @Input() name: string;
  @Input() title: string;
  @Output() checkboxesChange = new EventEmitter();
  private fieldset: Fieldset;
  forceRefresh: boolean = false;

  constructor(private formService: FormService) {}

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
    if (this.data === undefined) {
      return [];
    } else {
      if(!this.fieldset || this.forceRefresh) {
        this.fieldset = this.formService.setValue(this.name,this.data);
        this.forceRefresh = false;
      }
      return this.fieldset.getinputValues();
    }
  }
}