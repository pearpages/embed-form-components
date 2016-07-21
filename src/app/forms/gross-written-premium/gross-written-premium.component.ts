import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';
import { MarketCompanyComponent } from '../../form-elements/extended/market-company/market-company.component';

@Component({
  moduleId: module.id,
  selector: 'app-gross-written-premium',
  templateUrl: 'gross-written-premium.component.html',
  styleUrls: ['gross-written-premium.component.css'],
  providers: [FormService],
  directives: [OfficesComponent,RegionsSetComponent,CountriesComponent,CompanytypeComponent,RunReportComponent,MarketCompanyComponent,RegionsComponent]
})
export class GrossWrittenPremiumComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
