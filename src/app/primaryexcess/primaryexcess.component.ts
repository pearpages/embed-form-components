import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { FormService } from '../form.service';

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

  constructor(private formService: FormService) { }

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
    this.formService.setValue(this.name,this.data);
  }

}