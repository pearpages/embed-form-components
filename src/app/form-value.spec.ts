/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FormValue } from './form-value';

describe('Class: FormValue', () => {
  it('should create an instance', () => {
    let formValue = new FormValue('1','1',true,false);
    expect(formValue).toBeTruthy();
  });

    it('should initialize with the right value', () => {
        let formValue1 = new FormValue('1','1',true,false);
        expect(formValue1.current).toBe(false);
        let formValue2 = new FormValue('1','1',true,false,true);
        expect(formValue2.current).toBe(true);
        let formValue3 = new FormValue('1','1',true,false,false);
        expect(formValue3.current).toBe(false);
    }); 

    it('should reset the value',() => {
        let formValue1 = new FormValue('1','1',true,true);
        formValue1.current = 'car';
        formValue1.reset();
        expect(formValue1.current).toBe(true);
        
        let formValue2 = new FormValue('1','1',true,false);
        formValue2.current = 'cat';
        formValue2.reset();
        expect(formValue2.current).toBe(false);
    });
});
