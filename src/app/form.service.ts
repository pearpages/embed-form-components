import { Injectable } from '@angular/core';
import { Fieldset } from './fieldset';
import { FormValue } from './form-value';

@Injectable()
export class FormService {

  values: any = {};

  constructor() {}

  setValue(index: string, data: string): Fieldset {
    return this.values[index] = FormService.mapToFieldset(data);
  }

  getValue(index: string): Fieldset {
    return this.values[index];
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

  private static mapSets(fieldset: Fieldset,sets: any[]) {
    sets.forEach((set) => {
      fieldset.defineSet(set.id,set.values);
    });
  }

  private static mapToFormValues(values) {
    let res = [];
    values.forEach((o) => {
      res.push(new FormValue(o.value,o.label,o.visible,o.default,o.initial));
    });
    return res;
  }

  private static mapToFieldset(data: string): Fieldset {
    let obj = JSON.parse(data);
    let values = FormService.mapToFormValues(obj.values);
    let fieldset = new Fieldset(values,obj.multi);
    if(obj.sets){
      FormService.mapSets(fieldset,obj.sets);
    }
    return fieldset;
  }

}
