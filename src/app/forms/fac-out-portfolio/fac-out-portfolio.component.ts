import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';


@Component({
  moduleId: module.id,
  selector: 'app-fac-out-portfolio',
  templateUrl: 'fac-out-portfolio.component.html',
  styleUrls: ['fac-out-portfolio.component.css'],
  directives: [TypeOfViewComponent,OfficesComponent,RegionsSetComponent,LobsComponent,CompanytypeComponent,RegionsComponent],
  providers: [FormService]
})
export class FacOutPortfolioComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
