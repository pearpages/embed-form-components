import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { FormValue } from '../form-value';
import { Fieldset } from '../fieldset';

@Component({
  moduleId: module.id,
  selector: 'checkboxes',
  templateUrl: 'checkboxes.component.html',
  styleUrls: ['checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  @Input() data: string; 
  values;

  constructor(private formService: FormService) {}

  ngOnInit() {  
    let fieldset = this.formService.mapToFieldset(this.data);
    this.values = fieldset.getinputValues();
    this.formService.setValue('myCheckboxes',fieldset);
  }

  protected allChecked() {
    let values = this.values.filter((e) => {return e.visible === true});
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
    this.values.filter((e)=> { return e.visible === true}).forEach((e) => { e.current = status });
  }

  getButtonText() {
    return this.allChecked() ? 'Uncheck All' : 'Check All';
  }
}