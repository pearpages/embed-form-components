import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';
import { RegionsSetComponent } from '../../form-elements/extended/regions-set/regions-set.component';
import { RegionsComponent } from '../../form-elements/extended/regions/regions.component';

@Component({
  moduleId: module.id,
  selector: 'app-broker-meeting',
  templateUrl: 'broker-meeting.component.html',
  directives: [OfficesComponent,RegionsSetComponent,RegionsComponent],
  providers: [FormService]
})
export class BrokerMeetingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
