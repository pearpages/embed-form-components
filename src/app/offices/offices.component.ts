import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';

@Component({
  moduleId: module.id,
  selector: 'offices',
  templateUrl: 'offices.component.html',
  styleUrls: ['offices.component.css'],
  directives: [CheckboxesComponent]
})
export class OfficesComponent implements OnInit {

  data: string;
  name: string;
  title: string;

  constructor() { }

  ngOnInit() {
    this.data = 
      `{"values" :[
    {"value":"BCN","label":"HCCG Intl Barcelona","visible":true,"default":false,"initial":false},
    {"value":"JC","label":"HCCG Intl JC","visible":true,"default":false,"initial":false},
    {"value":"MIAMI","label":"HCCG Miami","visible":true,"default":false,"initial":false},
    {"value":"DEL","label":"Deleted - HCCG Intl...","visible":true,"default":false,"initial":false},
    {"value":"LDN","label":"HCCG Intl London","visible":true,"default":false,"initial":false},
    {"value":"CT","label":"HCCG Intl CT","visible":true,"default":false,"initial":false}
    ],
  "multi":true}
    `;

    this.title = 'Office';
    this.name = 'offices';    
  }

}