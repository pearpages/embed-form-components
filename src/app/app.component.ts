import { Component } from '@angular/core';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { RadiosComponent } from './radios/radios.component';
import { FormService } from './form.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CheckboxesComponent,RadiosComponent],
  providers: [FormService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private formService: FormService) {

  }

  resetCheckboxes() {
    this.formService.getValue('myCheckboxes').reset();
  }

  resetRadios() {
    this.formService.getValue('myRadios').reset();
  }

  getCheckboxes() {
    return this.formService.getValue('myCheckboxes').getOutputValues();
  }

  getRadios() {
    return this.formService.getValue('myRadios').getOutputValues();
  }
}
