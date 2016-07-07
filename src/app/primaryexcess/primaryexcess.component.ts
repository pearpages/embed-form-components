import { Component, OnInit } from '@angular/core';
import { RadiosComponent } from '../radios/radios.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'primary-excess',
  templateUrl: 'primaryexcess.component.html',
  styleUrls: ['primaryexcess.component.css'],
  directives: [RadiosComponent]
})
export class PrimaryexcessComponent implements OnInit {

  data: Ifieldset;
  name: string;
  title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.title = 'Primary/Excess';
    this.name = 'primary-excess';
    this.apiService.getPrimaryExcess().subscribe(
      (data) => this.data = data,
      (error) => console.error(error),
      () => console.log('primary excess done')
    );
  }

}