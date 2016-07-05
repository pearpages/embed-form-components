import { Injectable } from '@angular/core';
import { Fieldset } from './fieldset';
import { FormValue } from './form-value';

@Injectable()
export class FormService {

  values: any = {};

  constructor() {

  }

  setValue(index: string, value: Fieldset) {
    this.values[index] = value;
  }

  getValue(index: string): Fieldset {
    return this.values[index];
  }

  /*
    {data: [{name:string,value:string,visible:boolean,default:any,initial:any}]}
  */
  mapJSON(json: string): FormValue[] {
    let obj = JSON.parse(json);
    
    return [];
  }

  getJSON(): string {
    // todo
    return 'todo';
  }
}
