import { Injectable } from '@angular/core';
import { Fieldset } from '../models/fieldset';
import { FormValue } from '../models/form-value';

interface IfieldsetHash {
  [id:string]: Fieldset;
}

@Injectable()
export class FormService {

  values: IfieldsetHash = {};

  constructor() {}

  setValue(index: string, data: Fieldset): Fieldset {
    if(this.values[index] !== undefined) {
      console.log(index+' already defined');
    }
    return this.values[index] = data;
  }

  getValue(index: string): Fieldset {
    return this.values[index];
  }

  hasValue(index:string): boolean {
    return (this.values[index]) ? true: false;
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
