import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { ApiService } from '../api.service';

@Component({
  moduleId: module.id,
  selector: 'lobs',
  templateUrl: 'lobs.component.html',
  styleUrls: ['lobs.component.css'],
  directives: [CheckboxesComponent]
})
export class LobsComponent implements OnInit {

  data: any;
  name: string;
  title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.title = 'UW LOB';
    this.name = 'lobs';

    this.apiService.getLobs()
    .subscribe(
      (data) => {this.data = data},
      (error) => console.error(error),
      () => console.log('done')
    );
  }

}