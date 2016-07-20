import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'run-report',
  template: `
  <div class="fieldset">
  <div class="col-left">
    <h4></h4>
  </div>
  <div class="col-right">
    <label><input type="checkbox"> Show only total</label><br/>
    <label><input type="checkbox"> Remember these parameters for my next visit</label><br/>
    <button class="btn btn-default">Run Report</button>
  </div>
</div>
  `
})
export class RunReportComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
