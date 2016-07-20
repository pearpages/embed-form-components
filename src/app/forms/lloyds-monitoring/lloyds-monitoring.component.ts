import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { RunReportComponent } from '../../form-elements/extended/run-report/run-report.component';

@Component({
  moduleId: module.id,
  selector: 'app-lloyds-monitoring',
  templateUrl: 'lloyds-monitoring.component.html',
  styleUrls: ['lloyds-monitoring.component.css'],
  providers: [FormService],
  directives: [OfficesComponent,RegionsSetComponent,RegionsComponent,CountriesComponent,RunReportComponent]
})
export class LloydsMonitoringComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
