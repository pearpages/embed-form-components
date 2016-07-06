import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { RadiosComponent } from '../radios/radios.component';
import { SelectComponent } from '../select/select.component';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'app-showroom',
  templateUrl: 'showroom.component.html',
  styleUrls: ['showroom.component.css'],
  directives: [CheckboxesComponent,RadiosComponent,SelectComponent],
  providers: [FormService]
})
export class ShowroomComponent implements OnInit {

  data = `{"values" :[
    {"value":"1","label":"label 1","visible":true,"default":false,"initial":false},
    {"value":"2","label":"label 2","visible":true,"default":false,"initial":false},
    {"value":"3","label":"label 3","visible":true,"default":false,"initial":false},
    {"value":"4","label":"label 4","visible":true,"default":false,"initial":false},
    {"value":"5","label":"label 5","visible":true,"default":false,"initial":false},
    {"value":"6","label":"label 6","visible":true,"default":false,"initial":false},
    {"value":"7","label":"label 7","visible":true,"default":false,"initial":false},
    {"value":"8","label":"label 8","visible":true,"default":false,"initial":false},
    {"value":"9","label":"label 9","visible":true,"default":false,"initial":false},
    {"value":"10","label":"label 10","visible":true,"default":false,"initial":false},
    {"value":"11","label":"label 11","visible":true,"default":false,"initial":false},
    {"value":"12","label":"label 12","visible":true,"default":false,"initial":false}
    ],
    "sets": 
      [
        {"id":"one", "values" : ["1","2","3"]},
        {"id":"two","values" : ["4","5","6"]},
        {"id":"three" , "values" : ["7","8","9","10","11","12"]}
      ]
    ,
  "multi":true}`;

  constructor(private formService: FormService) { }

  private getFieldset(id) {
    return this.formService.getValue(id);
  }

  ngOnInit() {}

  reset(id) {
    this.getFieldset(id).reset();
  }

  getOutput(id) {
    return this.getFieldset(id).getOutputValues();
  }

  toggleVisibility(id, set) {
    this.getFieldset(id).toggleVisibilitySet(set);
  }

  getJSON() {
    return this.formService.getJSON();
  }

}