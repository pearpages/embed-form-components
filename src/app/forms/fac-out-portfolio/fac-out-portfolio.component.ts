import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';
import { MarketCompanyComponent } from '../../form-elements/extended/market-company/market-company.component';
import { UsExposedComponent } from '../../form-elements/extended/us-exposed/us-exposed.component';
import { OperationsComponent } from '../../form-elements/extended/operations/operations.component';
import { BusinessComponent } from '../../form-elements/extended/business/business.component';


@Component({
  moduleId: module.id,
  selector: 'app-fac-out-portfolio',
  templateUrl: 'fac-out-portfolio.component.html',
  styleUrls: ['fac-out-portfolio.component.css'],
  directives: [TypeOfViewComponent,OfficesComponent,RegionsSetComponent,LobsComponent,CompanytypeComponent,MarketCompanyComponent,RunReportComponent,OperationsComponent,BusinessComponent],
  providers: [FormService]
})
export class FacOutPortfolioComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
