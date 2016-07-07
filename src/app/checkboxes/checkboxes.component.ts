import { Component, OnInit, Input } from '@angular/core';
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

  @Input() data: Ifieldset; 
  @Input() name: string;
  @Input() title: string;
  private fieldset: Fieldset;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getValues();
  }

  protected allChecked() {
    return (this.fieldset) ? this.fieldset.haveAllCurrentValuesToTrue() : false;
  }

  toggle() {
    (this.fieldset) ? this.fieldset.toggleCurrentBooleanValues() : 'do nothing';
  }

  getButtonText() {
    return this.allChecked() ? 'Uncheck All' : 'Check All';
  }

  getValues(): FormValue[] {
    if (this.data === undefined) {
      return [];
    } else {
      if(!this.fieldset) {
        this.fieldset = this.formService.setValue(this.name,this.data);
      }
      return this.fieldset.getinputValues();
    }
  }
}