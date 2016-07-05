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
  data = `{
    "data": {
      "1": {"name":"1","label":"1","visible":true","default":"false","initial":"false"},
      "2": {"name":"2","label":"2","visible":true","default":"false","initial":"false"},
      "3": {"name":"3","label":"3","visible":true","default":"false","initial":"false"},
    }
  }
  `;

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
