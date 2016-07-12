import { Injectable } from '@angular/core';
import { Fieldset } from './fieldset';
import { Ifieldset } from './ifieldset';
import { FormValue } from './form-value';

@Injectable()
export class FormService {

  values: any = {};

  constructor() {}

  setValue(index: string, data: Ifieldset): Fieldset {
    if(this.values[index] !== undefined) {
      throw new Error(index+' already defined');
    }
    return this.values[index] = FormService.mapToFieldset(data);
  }

  getValue(index: string): Fieldset {
    return this.values[index];
  }

  hasValue(id:string) {
    return (localStorage.getItem(id) !== null);
  }

  saveToLocalStorage(id,value) {
    localStorage.setItem(id,value);
  }

  getFromLocalStorage(id) {
    return localStorage.getItem(id);
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

  private static mapToFieldset(obj: Ifieldset): Fieldset {
    let values = FormService.mapToFormValues(obj.values);
    let fieldset = new Fieldset(values,obj.multi);
    if(obj.sets){
      FormService.mapSets(fieldset,obj.sets);
    }
    return fieldset;
  }

}
