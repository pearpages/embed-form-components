import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportingfiguresComponent } from '../../form-elements/extended/reportingfigures';
import { CompanytypeComponent } from '../../form-elements/extended/companytype/companytype.component';
import { LobsComponent } from '../../form-elements/extended/lobs/lobs.component';
import { PrimaryexcessComponent } from '../../form-elements/extended/primaryexcess/primaryexcess.component';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { UwComponent } from '../../form-elements/extended/uw/uw.component';
import { FormService } from '../../services/form.service';
import { ApiService } from '../../services/api.service';
import { CountriesComponent } from '../../form-elements/extended/countries/countries.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { FormErrorComponent } from '../../form-elements/form-error/form-error.component';
import { TypeOfViewComponent } from '../../form-elements/extended/type-of-view/type-of-view.component';
import {TabView,TabPanel} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-showroom2',
  templateUrl: 'showroom2.component.html',
  styleUrls: ['showroom2.component.css'],
  directives: [ReportingfiguresComponent,CompanytypeComponent,LobsComponent,PrimaryexcessComponent,OfficesComponent,UwComponent,
  RegionsComponent,RegionsSetComponent,CountriesComponent,FormErrorComponent,TypeOfViewComponent,TabView,TabPanel],
  providers: [FormService]
})
export class Showroom2Component implements OnInit {

  errorMessages: any[] = [];

  @ViewChild(LobsComponent) lobs: LobsComponent;
  @ViewChild(ReportingfiguresComponent) reportingFigures: ReportingfiguresComponent;
  @ViewChild(CompanytypeComponent) companyType: CompanytypeComponent;
  @ViewChild(PrimaryexcessComponent) primaryExcess: PrimaryexcessComponent;
  @ViewChild(OfficesComponent) offices: OfficesComponent;
  @ViewChild(CountriesComponent) countries: CountriesComponent;
  @ViewChild(RegionsComponent) regions: RegionsComponent;
  @ViewChild(RegionsSetComponent) groups: RegionsSetComponent;

  components: any[];
  json: string = '';

  constructor(public formService: FormService) {}

  getHover(event) {
    console.log(event);
    if(event.action==='on'){
      this.formService.getWidget(event.id).highlight(true);
    }else if(event.action==='off'){
      this.formService.getWidget(event.id).highlight(false);
    }
  }

  ngOnInit() {
    this.components = [this.lobs,this.reportingFigures,this.companyType,this.primaryExcess,this.offices,this.countries,this.regions,this.groups];
  }

  forceRefresh() {
    this.components.forEach(c => c.forceRefresh());
  }

  getJson() {
    return this.json = this.formService.getJSON();
  }

  validate() {
    this.errorMessages = this.formService.validate();
  }
}
