import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';

@Component({
  moduleId: module.id,
  selector: 'app-broker-meeting',
  templateUrl: 'broker-meeting.component.html',
  directives: [OfficesComponent,RegionsSetComponent,RegionsComponent,CountriesComponent,LobsComponent,CompanytypeComponent,RunReportComponent],
  providers: [FormService]
})
export class BrokerMeetingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
