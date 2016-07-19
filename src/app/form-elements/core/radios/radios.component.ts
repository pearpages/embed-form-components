import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { Fieldset } from '../../../models/fieldset';
import { FormValue } from '../../../models/form-value';

@Component({
  moduleId: module.id,
  selector: 'radios',
  templateUrl: 'radios.component.html',
  styleUrls: ['radios.component.css']
})
export class RadiosComponent implements OnInit {

  @Input() fieldset: Fieldset;
  @Output() radiosChange = new EventEmitter();

  constructor(private formService: FormService) {}

  ngOnInit() { 
    this.getValues();
  }

  tellParents() {
    this.radiosChange.emit({value: this.fieldset.getOutputValues()});
  }

  updateValue(value: FormValue) {
    this.fieldset.putAllCurrentValuesToFalseButThisToTrue(value);
    this.tellParents();    
  }

  isChecked(value: FormValue) {
    return this.fieldset.isCurrentValueTrue(value);
  }

  getValues(): FormValue[] {
    if (this.fieldset === undefined) {
      return [];
    } 
    return this.fieldset.getinputValues();
  }
}
