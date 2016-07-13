import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Fieldset } from '../fieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [RadiosComponent]
})
export class GroupsComponent implements OnInit, IFormelement {

  @ViewChild(RadiosComponent) radios: RadiosComponent;
  data: Fieldset;
  name: string = 'groups';
  title: string = 'Groups';

  constructor(private apiService: ApiService, private formService: FormService) { }

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache: boolean = false) { 
    this.apiService.getGroups(useCache)
    .subscribe(
      (data) => {this.radios.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }

  onGroupsChange(event) {
    let groupid = event.value[0];
    if(this.formService.hasValue('regions')){
      let regions = this.formService.getValue('regions');
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