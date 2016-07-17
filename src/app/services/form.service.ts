import { Injectable } from '@angular/core';
import { Fieldset } from '../models/fieldset';
import { FormValue } from '../models/form-value';
import { Widget } from '../abstract/widget'

interface IfieldsetHash {
  [id:string]: Fieldset;
}

interface WidgetHash {
  [id:string]: Widget;
}

@Injectable()
export class FormService {

  values: IfieldsetHash = {};
  widgets: WidgetHash = {};

  constructor() {}

  setValue(index: string, data: Fieldset): Fieldset {
    if(this.values[index] !== undefined) {
      console.log(index+' already defined');
    }
    return this.values[index] = data;
  }

  setWidget(index: string, widget: Widget) {
    this.widgets[index] = widget;
  }

  getValue(index: string): Fieldset {
    return this.values[index];
  }

  getWidget(index:string): Widget {
    return this.widgets[index];
  }

  hasValue(index:string): boolean {
    return (this.values[index]) ? true: false;
  }

  validate() {
    for(let name in this.values) {
      console.log(name,this.values[name].isValid(),this.values[name].getStatus());
    }
  }

  getJSON(): string {
    let res = {};
    for(let index in this.values){
      let values = this.values[index].getOutputValues();
      if(values[0] != false){
        res[index] = values;
      }
    }
    return JSON.stringify(res);
  }

}
