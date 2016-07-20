import { Component, OnInit } from '@angular/core';
import { MarketCoComponent } from './market-co/market-co.component';

@Component({
  moduleId: module.id,
  selector: 'market-company',
  templateUrl: 'market-company.component.html',
  directives: [MarketCoComponent]
})
export class MarketCompanyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
