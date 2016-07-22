import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';

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
    <button (click)="getJSON()" class="btn btn-default">Run Report</button>
  </div>
</div>
<p>{{json}}</p>
  `
})
export class RunReportComponent implements OnInit {

  json:string;

  constructor(private form: FormService) {}

  ngOnInit() {}

  getJSON() {
    this.json =  this.form.getJSON();
  }  

}
