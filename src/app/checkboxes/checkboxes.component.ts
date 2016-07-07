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
  values: Fieldset;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getValues();
  }

  protected allChecked() {
    let values = this.getValues().filter((e) => {return e.visible === true});
    if(values.length === 0){
      return true;
    }
    return values.reduce((previous,current) => {
      return current.current && previous;
    }, true);
  }

  toggle() {
    var status = true;
    if(this.allChecked()){
      status = false;
    }
    this.getValues().filter((e)=> { return e.visible === true}).forEach((e) => { e.current = status });
  }

  getButtonText() {
    return this.allChecked() ? 'Uncheck All' : 'Check All';
  }

  getValues(): FormValue[] {
    if (this.data === undefined) {
      return [];
    } else {
      if(!this.values) {
        this.values = this.formService.setValue(this.name,this.data);
      }
      return this.values.getinputValues();
    }
  }
}