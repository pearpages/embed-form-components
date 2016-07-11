import { Component, OnInit, ViewChild } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';
import { IFormelement } from '../iformelement';

@Component({
  moduleId: module.id,
  selector: 'reporting-figures',
  templateUrl: 'reportingfigures.component.html',
  styleUrls: ['reportingfigures.component.css'],
  directives: [RadiosComponent]
})
export class ReportingfiguresComponent implements OnInit, IFormelement {

  @ViewChild(RadiosComponent) radios: RadiosComponent;
  data: Ifieldset;
  name: string = 'reporting-figures';
  title: string = 'Reporting Figures';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.forceRefresh(true);
  }

  forceRefresh(useCache: boolean = false) { 
    this.apiService.getReportingFigures(useCache)
    .subscribe(
      (data) => {this.radios.forceRefresh = !useCache; this.data = data},
      (error) => console.error(error),
      () => 'put any debug comments here'
    );    
  }
}
