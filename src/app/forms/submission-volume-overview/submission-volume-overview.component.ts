import { Component, OnInit } from '@angular/core';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { UwComponent } from '../../form-elements/extended/uw/uw.component';
import { LobsComponent } from  '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { FormService } from '../../services/form.service'; 

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

  json: string;

  constructor(private form: FormService) {}

  ngOnInit() {
  }

  getJson() {
    this.json = this.form.getJSON();
  }

}
