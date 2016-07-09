import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { Ifieldset } from '../Ifieldset';

@Component({
  moduleId: module.id,
  selector: 'app-uw',
  templateUrl: 'uw.component.html',
  styleUrls: ['uw.component.css'],
  directives: [SelectComponent]
})
export class UwComponent implements OnInit {

  name: string = 'uw';
  data: Ifieldset = null;
  title: string = 'UWs';

  constructor() {}

  ngOnInit() {
  }

}
