import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'; 
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';

@Component({
  moduleId: module.id,
  selector: 'app-limit-exception',
  templateUrl: 'limit-exception.component.html',
  styleUrls: ['limit-exception.component.css'],
  directives: [OfficesComponent,RunReportComponent],
  providers: [FormService]
})
export class LimitExceptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
