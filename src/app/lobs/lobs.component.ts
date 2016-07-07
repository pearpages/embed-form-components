import { Component, OnInit } from '@angular/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { Ifieldset } from '../ifieldset';
import { Http, Response } from '@angular/http';

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

  constructor(private http: Http) { }

  ngOnInit() {

/*
    this.data =
      {
        values: [
          { value: "DO", label: "DO", visible: true, default: false, initial: false },
          { value: "EPL", label: "EPL", visible: true, default: false, initial: false },
          { value: "FIDLIA", label: "FIDLIA", visible: true, default: false, initial: false },
          { value: "CRIM", label: "CRIM", visible: true, default: false, initial: false },
          { value: "EANDO", label: "EANDO", visible: true, default: false, initial: false },
          { value: "BLD", label: "BLD", visible: true, default: false, initial: false },
          { value: "TRI", label: "TRI", visible: true, default: false, initial: false },
          { value: "KR", label: "KR", visible: true, default: false, initial: false },
          { value: "CYBER", label: "CYBER", visible: true, default: false, initial: false },
          { value: "CGCY", label: "CGCY", visible: true, default: false, initial: false },
          { value: "DISAB", label: "DISAB", visible: true, default: false, initial: false }
        ],
        multi: true
      };
*/
    this.title = 'UW LOB';
    this.name = 'lobs';

    this.http.get('/api/lobs.json')
    .subscribe(
      (data) => {this.data = data.json(); console.log(data.json())},
      (error) => console.error(error),
      () => console.log('done')
    );
  }

}