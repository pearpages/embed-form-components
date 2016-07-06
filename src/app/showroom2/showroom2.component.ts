import { Component, OnInit } from '@angular/core';
import { ReportingfiguresComponent } from '../reportingfigures';
import { CompanytypeComponent } from '../companytype/companytype.component';
import { LobsComponent } from '../lobs/lobs.component';
import { PrimaryexcessComponent } from '../primaryexcess/primaryexcess.component';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'app-showroom2',
  templateUrl: 'showroom2.component.html',
  styleUrls: ['showroom2.component.css'],
  directives: [ReportingfiguresComponent,CompanytypeComponent,LobsComponent,PrimaryexcessComponent]
})
export class Showroom2Component implements OnInit {

  constructor(public formService: FormService) {}

  ngOnInit() {
  }

}
