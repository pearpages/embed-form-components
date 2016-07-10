import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';

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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGroups(true).subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

  forceRefresh() { 
    this.apiService.getGroups(false)
    .subscribe(
      (data) => {this.radios.forceRefresh = true; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }
}