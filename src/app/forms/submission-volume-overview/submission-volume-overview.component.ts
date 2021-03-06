import { Component, OnInit } from '@angular/core';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { UwComponent } from '../../form-elements/extended/uw/uw.component';
import { LobsComponent } from  '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { OperationsComponent } from '../../form-elements/extended/operations/operations.component';
import { BusinessComponent } from '../../form-elements/extended/business/business.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';
import { FormService } from '../../services/form.service'; 

@Component({
  moduleId: module.id,
  selector: 'app-submission-volume-overview',
  templateUrl: 'submission-volume-overview.component.html',
  styleUrls: ['submission-volume-overview.component.css'],
  providers: [FormService],
  directives: [TypeOfViewComponent,OfficesComponent,RegionsSetComponent,UwComponent,LobsComponent,CompanytypeComponent,RunReportComponent,OperationsComponent,BusinessComponent]
})
export class SubmissionVolumeOverviewComponent implements OnInit {

  json: string;

  constructor(private form: FormService) {}

  ngOnInit() {
  }

  getJson() {
    this.json = this.form.getJSON();
  }

}
