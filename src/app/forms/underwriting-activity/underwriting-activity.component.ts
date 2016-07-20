import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ReportingfiguresComponent } from '../../form-elements/extended/reportingfigures/reportingfigures.component';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { PrimaryexcessComponent } from '../../form-elements/extended/primaryexcess/primaryexcess.component';
import { UwComponent } from '../../form-elements/extended/uw/uw.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';

@Component({
  moduleId: module.id,
  selector: 'app-underwriting-activity',
  templateUrl: 'underwriting-activity.component.html',
  styleUrls: ['underwriting-activity.component.css'],
  providers: [FormService],
  directives: [ReportingfiguresComponent,TypeOfViewComponent,OfficesComponent,UwComponent,LobsComponent,PrimaryexcessComponent,RunReportComponent]
})
export class UnderwritingActivityComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
