import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-error',
  templateUrl: 'form-error.component.html',
  styleUrls: ['form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() errorMessages: any[];
  @Output() hovering: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  highlight(id: string) {
    this.hovering.emit('on '+id);
  }

  removeHighlight(id:string) {
    this.hovering.emit('off '+id);
  }

  removeError(index) {
    this.errorMessages.splice(index,1);
  }

}
