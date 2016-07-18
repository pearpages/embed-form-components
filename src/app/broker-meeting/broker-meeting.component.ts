import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { OfficesComponent } from '../offices/offices.component';

@Component({
  moduleId: module.id,
  selector: 'app-broker-meeting',
  templateUrl: 'broker-meeting.component.html',
  directives: [OfficesComponent],
  providers: [FormService]
})
export class BrokerMeetingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
