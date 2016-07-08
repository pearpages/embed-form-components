import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'reporting-figures',
  templateUrl: 'reportingfigures.component.html',
  styleUrls: ['reportingfigures.component.css'],
  directives: [RadiosComponent]
})
export class ReportingfiguresComponent implements OnInit {

  data: Ifieldset;
  name: string;
  title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.title = 'Reporting Figures';
    this.name = 'reporting-figures';
    this.apiService.getReportingFigures().subscribe(
      (data) => this.data,
      (error) => console.error(error),
      () => 'put any debug comments here'
    );
  }

}
