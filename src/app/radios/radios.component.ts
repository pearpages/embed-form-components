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
  forceRefresh: boolean = false;

  private fieldset: Fieldset;

  constructor(private formService: FormService) {}

  ngOnInit() { 
    this.getValues();
  }

  updateValue(value: FormValue) {
    this.fieldset.putAllCurrentValuesToFalseButThisToTrue(value);
  }

  isChecked(value: FormValue) {
    return this.fieldset.isCurrentValueTrue(value);
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
