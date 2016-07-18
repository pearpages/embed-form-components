import { Component, OnInit } from '@angular/core';
import { TypeOfViewComponent } from '../type-of-view/type-of-view.component';
import { OfficesComponent } from '../offices/offices.component';
import { RegionsSetComponent } from '../regions-set/regions-set.component';
import { RegionsComponent } from '../regions/regions.component';
import { CountriesComponent } from '../countries/countries.component';
import { UwComponent } from '../uw/uw.component';
import { LobsComponent } from  '../lobs/lobs.component';
import { CompanytypeComponent } from '../companytype/companytype.component';
import { FormService } from '../services/form.service'; 

@Component({
  moduleId: module.id,
  selector: 'app-submission-volume-overview',
  templateUrl: 'submission-volume-overview.component.html',
  styleUrls: ['submission-volume-overview.component.css'],
  providers: [FormService],
  directives: [TypeOfViewComponent,OfficesComponent,RegionsSetComponent
  ,RegionsComponent,CountriesComponent,UwComponent,LobsComponent,CompanytypeComponent]
})
export class SubmissionVolumeOverviewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }


}
