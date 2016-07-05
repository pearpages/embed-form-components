import { Component } from '@angular/core';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { RadiosComponent } from './radios/radios.component';
import { SelectComponent } from './select/select.component';
import { FormService } from './form.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CheckboxesComponent,RadiosComponent,SelectComponent],
  providers: [FormService]
})
export class AppComponent {
  title = 'app works!';
  data = `{"values" :[
    {"value":"1","label":"1","visible":true,"default":false,"initial":false},
    {"value":"2","label":"2","visible":true,"default":false,"initial":false},
    {"value":"3","label":"3","visible":true,"default":false,"initial":false},
    {"value":"4","label":"4","visible":true,"default":false,"initial":false},
    {"value":"5","label":"5","visible":true,"default":false,"initial":false},
    {"value":"6","label":"6","visible":true,"default":false,"initial":false},
    {"value":"7","label":"7","visible":true,"default":false,"initial":false},
    {"value":"8","label":"8","visible":true,"default":false,"initial":false},
    {"value":"9","label":"9","visible":true,"default":false,"initial":false},
    {"value":"10","label":"10","visible":true,"default":false,"initial":false},
    {"value":"11","label":"11","visible":true,"default":false,"initial":false},
    {"value":"12","label":"12","visible":true,"default":false,"initial":false}
    ],
    "sets": 
      [
        {"id":"one", "values" : ["1","2","3"]},
        {"id":"two","values" : ["4","5","6"]},
        {"id":"three" , "values" : ["7","8","9","10","11","12"]}
      ]
    ,
  "multi":true}`;

  constructor(private formService: FormService) {}

  private getFieldset(id) {
    return this.formService.getValue(id); 
  }

  reset(id){
    this.getFieldset(id).reset();
  }

  getOutput(id) {
    return this.getFieldset(id).getOutputValues();
  }

  toggleVisibility(id,set) {
    this.getFieldset(id).toggleVisibilitySet(set);
  }

}
