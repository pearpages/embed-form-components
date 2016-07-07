import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';

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

  constructor() { }

  ngOnInit() {
    this.data =
      {
        values: [
          { value: "net", label: "Net of Fac Out", visible: true, default: false, initial: false },
          { value: "gross", label: "Gross of Fac Out", visible: true, default: false, initial: false }
        ],
        multi: false
      };

    this.title = 'Reporting Figures';
    this.name = 'reporting-figures';
  }

}
