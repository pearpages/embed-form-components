import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportingfiguresComponent } from '../reportingfigures';
import { CompanytypeComponent } from '../companytype/companytype.component';
import { LobsComponent } from '../lobs/lobs.component';
import { PrimaryexcessComponent } from '../primaryexcess/primaryexcess.component';
import { OfficesComponent } from '../offices/offices.component';
import { UwComponent } from '../uw/uw.component';
import { FormService } from '../form.service';
import { ApiService } from '../api.service';
import { GroupscountriesregionsComponent } from '../groupscountriesregions/groupscountriesregions.component';

@Component({
  moduleId: module.id,
  selector: 'app-showroom2',
  templateUrl: 'showroom2.component.html',
  styleUrls: ['showroom2.component.css'],
  directives: [ReportingfiguresComponent,CompanytypeComponent,LobsComponent,PrimaryexcessComponent,OfficesComponent,UwComponent,GroupscountriesregionsComponent],
  providers: [ApiService]
})
export class Showroom2Component implements OnInit {

  @ViewChild(LobsComponent) lobs: LobsComponent;
  @ViewChild(ReportingfiguresComponent) reportingFigures: ReportingfiguresComponent;
  @ViewChild(CompanytypeComponent) companyType: CompanytypeComponent;
  @ViewChild(PrimaryexcessComponent) primaryExcess: PrimaryexcessComponent;
  @ViewChild(OfficesComponent) offices: OfficesComponent;
  components: any[];
  json: string = '';

  constructor(public formService: FormService) {}

  ngOnInit() {
    this.components = [this.lobs,this.reportingFigures,this.companyType,this.primaryExcess,this.offices];
  }

  forceRefresh() {
    this.components.forEach(c => c.forceRefresh());
  }

  getJson() {
    return this.json = this.formService.getJSON();
  }
}
