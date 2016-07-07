import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'company-type',
  templateUrl: 'companytype.component.html',
  styleUrls: ['companytype.component.css'],
  directives: [CheckboxesComponent]
})
export class CompanytypeComponent implements OnInit {

  data: Ifieldset;
  name: string;
  title: string;

  constructor(private apiService: ApiService) {
    this.title = 'Reporting Figures';
  }

  ngOnInit() {
    this.title = 'Company Type';
    this.name = 'company-type';

    this.apiService.getCompanyTypes().subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => console.log('done')
    );
  }

}
