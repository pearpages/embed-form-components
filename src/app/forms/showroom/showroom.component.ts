import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../../form-elements/core/checkboxes/checkboxes.component';
import { RadiosComponent } from '../../form-elements/core/radios/radios.component';
import { SelectComponent } from '../../form-elements/core/select/select.component';
import { FormService } from '../../services/form.service';
import { Fieldsetmapper } from '../../models/fieldsetmapper';
import { Fieldset } from '../../models/fieldset';
import { Ifieldset } from '../../interfaces/ifieldset';

@Component({
  moduleId: module.id,
  selector: 'app-showroom',
  templateUrl: 'showroom.component.html',
  styleUrls: ['showroom.component.css'],
  directives: [CheckboxesComponent, RadiosComponent, SelectComponent],
  providers: [FormService]
})
export class ShowroomComponent implements OnInit {

  data: Ifieldset = {
    title: "put-here-the-title",
    values: [
      { value: "1", label: "label 1", visible: true, default: false, initial: false },
      { value: "2", label: "label 2", visible: true, default: false, initial: false },
      { value: "3", label: "label 3", visible: true, default: false, initial: false },
      { value: "4", label: "label 4", visible: true, default: false, initial: false },
      { value: "5", label: "label 5", visible: true, default: false, initial: false },
      { value: "6", label: "label 6", visible: true, default: false, initial: false },
      { value: "7", label: "label 7", visible: true, default: false, initial: false },
      { value: "8", label: "label 8", visible: true, default: false, initial: false },
      { value: "9", label: "label 9", visible: true, default: false, initial: false },
      { value: "10", label: "label 10", visible: true, default: false, initial: false },
      { value: "11", label: "label 11", visible: true, default: false, initial: false },
      { value: "12", label: "label 12", visible: true, default: false, initial: false }
    ],
    sets:
    [
      { id: "one", values: ["1", "2", "3"] },
      { id: "two", values: ["4", "5", "6"] },
      { id: "three", values: ["7", "8", "9", "10", "11", "12"] }
    ]
    ,
    multi: true
  };
  f1: Fieldset = Fieldsetmapper.mapToFieldset(this.data);
  f2: Fieldset = Fieldsetmapper.mapToFieldset(this.data);
  f3: Fieldset = Fieldsetmapper.mapToFieldset(this.data);
  f4: Fieldset = Fieldsetmapper.mapToFieldset(this.data);

  constructor(private formService: FormService) { }

  private getFieldset(id): Fieldset {
    return this[id];
  }

  ngOnInit() { 
    this.formService.setValue('f1',this.f1);
    this.formService.setValue('f2',this.f2);
    this.formService.setValue('f3',this.f3);
    this.formService.setValue('f4',this.f4);
  }

  reset(id) {
    this.getFieldset(id).reset();
  }

  getOutput(id): any[] {
    if(this.getFieldset(id) === undefined) {
      return [];
    }
    return this.getFieldset(id).getOutputValues();
  }

  toggleVisibility(id, set) {
    this.getFieldset(id).set.getSet(set).toggle();
  }

  getJSON() {
    return this.formService.getJSON();
  }

}
