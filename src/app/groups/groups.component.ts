import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
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
  data: Ifieldset;
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

  groupChange(event) {
    let set = event.value[0];
    if(set){
      this.formService.getValue('regions').toggleVisibilitySet(set);
    }
  }
}