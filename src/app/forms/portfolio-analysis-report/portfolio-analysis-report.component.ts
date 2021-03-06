import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ReportingfiguresComponent } from '../../form-elements/extended/reportingfigures/reportingfigures.component';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { PrimaryexcessComponent } from '../../form-elements/extended/primaryexcess/primaryexcess.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';
import { UsExposedComponent } from '../../form-elements/extended/us-exposed/us-exposed.component';
import { OperationsComponent } from '../../form-elements/extended/operations/operations.component';
import { BusinessComponent } from '../../form-elements/extended/business/business.component';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio-analysis-report',
  templateUrl: 'portfolio-analysis-report.component.html',
  styleUrls: ['portfolio-analysis-report.component.css'],
  directives: [ReportingfiguresComponent,TypeOfViewComponent,OfficesComponent,RegionsSetComponent,LobsComponent,CompanytypeComponent,PrimaryexcessComponent,RunReportComponent,UsExposedComponent,
  OperationsComponent,BusinessComponent],
  providers: [FormService]
})
export class PortfolioAnalysisReportComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
