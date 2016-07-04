import { Injectable } from '@angular/core';
import { Fieldset } from './fieldset';

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

  getJSON(): string {
    // todo
    return 'todo';
  }
}
