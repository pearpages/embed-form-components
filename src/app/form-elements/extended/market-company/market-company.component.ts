import { Component, OnInit } from '@angular/core';
import { MarketCoComponent } from './market-co/market-co.component';
import { LocalPoliciesComponent } from './local-policies/local-policies.component';

@Component({
  moduleId: module.id,
  selector: 'market-company',
  templateUrl: 'market-company.component.html',
  directives: [MarketCoComponent,LocalPoliciesComponent]
})
export class MarketCompanyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
