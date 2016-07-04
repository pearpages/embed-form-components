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

    it('should initialize with the right *current* value, either the reset one or the initial given', () => {
      // new
        let formValue1 = new FormValue('1','1',true,false);
        expect(formValue1.current).toBe(false);
        let formValue2 = new FormValue('1','1',true,false,true);
        expect(formValue2.current).toBe(true);
        let formValue3 = new FormValue('1','1',true,false,false);
        expect(formValue3.current).toBe(false);
    });

    it('should give the right label', () => {
      // getLabel()
      let formValue1 = new FormValue('1','1',true,false);
      expect(formValue1.getLabel()).toBe('1');
    }); 

    it('should give the right value', () => {
      // getValue()
      let formValue1 = new FormValue('1','1',true,false);
      expect(formValue1.getValue()).toBe('1');
    });     

    it('should reset the value when asked',() => {
        // reset()

        let formValue1 = new FormValue('1','1',true,true);
        formValue1.current = 'car';
        formValue1.reset();
        expect(formValue1.current).toBe(true);
        
        let formValue2 = new FormValue('1','1',true,false);
        formValue2.current = 'cat';
        formValue2.reset();
        expect(formValue2.current).toBe(false);
    });

    it('should say correctly if the element is being visible or not', () => {
        // isVisible()
        let formValue1 = new FormValue('1','1',true,true);
        expect(formValue1.isVisible()).toBe(true);
        expect(formValue1.visible).toBe(formValue1.isVisible());
        formValue1.visible = false;
        expect(formValue1.isVisible()).toBe(false);
    });
});
