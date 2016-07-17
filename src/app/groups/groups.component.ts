import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'groups',
  template: `<radios [title]="title" 
  [fieldset]="data" (radiosChange)="onGroupsChange($event)"></radios>`,
  directives: [RadiosComponent]
})
export class GroupsComponent implements OnInit, IFormelement {

  data: Fieldset;
  name: string = 'groups';
  title: string = 'Groups';

  constructor(private apiService: ApiService, private form: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
    this.form.setValue(this.name,this.data);
  }

  forceRefresh(useCache: boolean = false) { 
    this.apiService.getGroups(useCache)
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

  onGroupsChange(event) {
    let groupid = event.value[0];
    if(this.form.hasValue('regions')){
      let regions = this.form.getValue('regions');
      regions.setToFalseAllCurrentValues();
      if(groupid === false) {
        regions.set.hideAll();
      } else {
        regions.set.showOnlyThisSet(groupid);
      }
    }
  }

  validate():boolean {
    return true;
  }

}