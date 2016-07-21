import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../abstract/widget';
import { SelectComponent } from '../../core/select/select.component';
import { ApiService } from '../../../services/api.service';
import { FormService } from '../../../services/form.service';
import { valid } from '../../../interfaces/ivalidate';
import { Fieldset } from '../../../models/fieldset';

@Component({
  moduleId: module.id,
  selector: 'business',
  templateUrl: 'business.component.html',
  styleUrls: ['business.component.css'],
  directives: [SelectComponent]
})
export class BusinessComponent extends Widget {

  selectedSet: string[] = [];

  constructor(protected apiService: ApiService, protected form: FormService) {
    super(apiService, form, 'business', 'Business', 'getBusiness');
  }

  getSets(): String[] {
    return [].concat(['All'], this.data.set.getLabels());
  }

  updateSelectedSet(set: string) {
    let i = this.selectedSet.indexOf(set);
    if(i !== -1) {
      // unselect
      this.selectedSet.splice(i,1);
      if(set !== 'All'){
        this.data.set.getSet(set).setFalse();
      }
    } else {
      // select
      if(set !== 'All') {
        let all = this.selectedSet.indexOf('All'); 
        if(all !== -1) {
          this.selectedSet.splice(all,1);
        }
        this.data.set.getSet(set).setTrue();
        this.selectedSet.push(set);
      } else {
        this.selectedSet = ['All'];
      }
    }
  }

  getClasses(set: string): string[] {
    let classes = ['btn', 'btn-default', 'btn-sm'];
    if (this.selectedSet.indexOf(set) !== -1) {
      classes.push('active');
    }
    return classes;
  }

  isVisibleSelect(): boolean {
    return (this.selectedSet.indexOf('All') === -1 && this.selectedSet.length > 0);
  }

  validate(f: Fieldset): valid {
    return {
      valid: true,
      error: 'please select one Operation',
      id: this.name
    };
  }

}
