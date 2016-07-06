import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'reporting-figures',
  templateUrl: 'reportingfigures.component.html',
  styleUrls: ['reportingfigures.component.css'],
  directives: [RadiosComponent]
})
export class ReportingfiguresComponent implements OnInit {

  data;
  name: string;
  title;

  constructor(private formService: FormService) {
    this.title = 'Reporting Figures';
  }

  ngOnInit() {
    this.data = 
      `{"values" :[
    {"value":"1","label":"Net of Fac Out","visible":true,"default":false,"initial":false},
    {"value":"2","label":"Gross of Fac Out","visible":true,"default":false,"initial":false}
    ],
  "multi":false}
    `;

    console.log(JSON.parse(this.data));

    this.title = 'Reporting Figures';
    this.name = 'reporting-figures';    
    this.formService.setValue(this.name,this.data);
  }

}
