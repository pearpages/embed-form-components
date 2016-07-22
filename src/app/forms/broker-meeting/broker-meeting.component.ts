import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';
import { OperationsComponent } from '../../form-elements/extended/operations/operations.component';
import { BusinessComponent } from '../../form-elements/extended/business/business.component';

@Component({
  moduleId: module.id,
  selector: 'app-broker-meeting',
  templateUrl: 'broker-meeting.component.html',
  directives: [OfficesComponent,RegionsSetComponent,LobsComponent,CompanytypeComponent,RunReportComponent,OperationsComponent,BusinessComponent],
  providers: [FormService]
})
export class BrokerMeetingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
