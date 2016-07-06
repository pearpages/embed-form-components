import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  templateUrl: 'companytype.component.html',
  styleUrls: ['companytype.component.css'],
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent implements OnInit {

  data: string;
  name: string;
  title: string;

  constructor(private formService: FormService) {
    this.title = 'Reporting Figures';
  }

  ngOnInit() {
    this.data = 
      `{"values" :[
    {"value":"financial","label":"Financial Institutions","visible":true,"default":false,"initial":false},
    {"value":"commercial","label":"Commercial Institutions","visible":true,"default":false,"initial":false}
    ],
  "multi":true}
    `;

    this.title = 'Company Type';
    this.name = 'company-type';    
    this.formService.setValue(this.name,this.data);
  }

}
