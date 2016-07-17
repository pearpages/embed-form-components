import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportingfiguresComponent } from '../reportingfigures';
import { CompanytypeComponent } from '../companytype/companytype.component';
import { LobsComponent } from '../lobs/lobs.component';
import { PrimaryexcessComponent } from '../primaryexcess/primaryexcess.component';
import { OfficesComponent } from '../offices/offices.component';
import { UwComponent } from '../uw/uw.component';
import { FormService } from '../services/form.service';
import { ApiService } from '../services/api.service';
import { GroupscountriesregionsComponent } from '../groupscountriesregions/groupscountriesregions.component';
import { CountriesComponent } from '../countries/countries.component';
import { RegionsComponent } from '../regions/regions.component';
import { GroupsComponent } from '../groups/groups.component';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  moduleId: module.id,
  selector: 'app-showroom2',
  templateUrl: 'showroom2.component.html',
  styleUrls: ['showroom2.component.css'],
  directives: [ReportingfiguresComponent,CompanytypeComponent,LobsComponent,PrimaryexcessComponent,OfficesComponent,UwComponent,GroupscountriesregionsComponent,
  RegionsComponent,GroupsComponent,CountriesComponent,FormErrorComponent],
  providers: [ApiService]
})
export class Showroom2Component implements OnInit {

  errorMessages: any[] = [{id:'reporting-figures',error:'Selec either Net or Gross'}];

  @ViewChild(LobsComponent) lobs: LobsComponent;
  @ViewChild(ReportingfiguresComponent) reportingFigures: ReportingfiguresComponent;
  @ViewChild(CompanytypeComponent) companyType: CompanytypeComponent;
  @ViewChild(PrimaryexcessComponent) primaryExcess: PrimaryexcessComponent;
  @ViewChild(OfficesComponent) offices: OfficesComponent;
  @ViewChild(CountriesComponent) countries: CountriesComponent;
  @ViewChild(RegionsComponent) regions: RegionsComponent;
  @ViewChild(GroupsComponent) groups: GroupsComponent;

  components: any[];
  json: string = '';

  constructor(public formService: FormService) {}

  getHover(event) {
    console.log(event);
    let id = event.split(' ')[1];
    if(event.includes('on')){
      this.formService.getWidget(id).highlight(true);
    }else{
      this.formService.getWidget(id).highlight(false);
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
