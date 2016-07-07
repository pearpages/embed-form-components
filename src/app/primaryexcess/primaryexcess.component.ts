import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  templateUrl: 'primaryexcess.component.html',
  styleUrls: ['primaryexcess.component.css'],
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent implements OnInit {

  data: string;
  name: string;
  title: string;

  constructor() { }

  ngOnInit() {
    this.data = 
      `{"values" :[
    {"value":"all","label":"All","visible":true,"default":false,"initial":false},
    {"value":"primary","label":"Primary","visible":true,"default":false,"initial":false},
    {"value":"excess","label":"Excess","visible":true,"default":false,"initial":false}
    ],
  "multi":false}
    `;

    this.title = 'Primary/Excess';
    this.name = 'primary-excess';    
  }

}