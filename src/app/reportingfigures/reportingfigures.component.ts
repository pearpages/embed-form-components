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

  data: string;
  name: string;
  title: string;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.data = 
      `{"values" :[
    {"value":"net","label":"Net of Fac Out","visible":true,"default":false,"initial":false},
    {"value":"gross","label":"Gross of Fac Out","visible":true,"default":false,"initial":false}
    ],
  "multi":false}
    `;

    this.title = 'Reporting Figures';
    this.name = 'reporting-figures';    
    this.formService.setValue(this.name,this.data);
  }

}
