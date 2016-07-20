import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'; 
import { OfficesComponent } from '../../form-elements/extended/offices/offices.component';

@Component({
  moduleId: module.id,
  selector: 'app-limit-exception',
  templateUrl: 'limit-exception.component.html',
  styleUrls: ['limit-exception.component.css'],
  directives: [OfficesComponent],
  providers: [FormService]
})
export class LimitExceptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
