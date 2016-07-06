import { Component, OnInit } from '@angular/core';
import { ReportingfiguresComponent } from '../reportingfigures';
import { FormService } from '../form.service';

@Component({
  moduleId: module.id,
  selector: 'app-showroom2',
  templateUrl: 'showroom2.component.html',
  styleUrls: ['showroom2.component.css'],
  directives: [ReportingfiguresComponent]
})
export class Showroom2Component implements OnInit {

  constructor(public formService: FormService) {}

  ngOnInit() {
  }

}
