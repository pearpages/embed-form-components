/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Fieldset } from './fieldset';
import { FormValue } from './form-value';

describe('Class: Fieldset', () => {
  it('should create an instance', () => {
    // new
    let fieldset = new Fieldset([new FormValue('1','1',true,false)],false);
    expect(fieldset).toBeTruthy();
  });

  it('should tell me whether if it is multi or not', () => {
    // isMulti
    let fieldset1 = new Fieldset([new FormValue('1','1',true,false)],false);
    let fieldset2 = new Fieldset([new FormValue('1','1',true,false)],true);
    expect(fieldset1.isMulti()).toBe(false);
    expect(fieldset2.isMulti()).toBe(true);
  });

  it('should keep the reference to an array of FormValue objects', () => {
    // getinputValues
    let formValues = [new FormValue('1','1',true,false),new FormValue('2','2',true,false)];
    let fieldset = new Fieldset(formValues,false);
    expect(fieldset.getinputValues()).toEqual(formValues);
  });

  it('should reset the value of the output, which is always an array',() => {
    // reset and output

    // single output
    let value1 = new FormValue('1','1',true,false);
    let value2 = new FormValue('2','2',true,false);
    let formValues = [value1,value2];
    let fieldset = new Fieldset(formValues,false);
    expect(fieldset.getOutputValues()).toEqual([false]);
    value1.current = true;
    expect(fieldset.getOutputValues()).toEqual(['1']);
    value2.current = true;
    expect(fieldset.getOutputValues()).toEqual(['1']);
    value1.current = false;
    expect(fieldset.getOutputValues()).toEqual(['2']);
    expect(fieldset.reset().getOutputValues()).toEqual([false]);


    // multi output
    let value3 = new FormValue('3','3',true,false);
    let value4 = new FormValue('4','4',true,false);
    let formValues2 = [value3,value4];
    let fieldset2 = new Fieldset(formValues2,true);    
    expect(fieldset2.getOutputValues()).toEqual([false]);
    value3.current = true;
    expect(fieldset2.getOutputValues()).toEqual(['3']);
    value4.current = true;
    expect(fieldset2.getOutputValues()).toEqual(['3','4']);
    value3.current = false;
    expect(fieldset2.getOutputValues()).toEqual(['4']);
    expect(fieldset2.reset().getOutputValues()).toEqual([false]);
  });

  it('should let us define a set of values', () => {
    let value1 = new FormValue('1','1',true,true);
    let value2 = new FormValue('2','2',true,false);
    let value3 = new FormValue('3','3',true,false);
    let value4 = new FormValue('4','4',true,false);
    let value5 = new FormValue('5','5',true,false);
    let fieldset = new Fieldset([value1,value2,value3,value4,value5],false);

    let set1 = ['1','2'];
    fieldset.defineSet('one', set1);
    let set2 = ['1','5'];
    fieldset.defineSet('two', set2);

    expect(fieldset.set.getSet('one').size()).toEqual(set1.length);
    expect(fieldset.set.getSet('two').size()).toEqual(set2.length);
    
    set1.forEach(v => expect(fieldset.set.getSet('one').hasValue(v)).toBe(true));
    set2.forEach(v => expect(fieldset.set.getSet('two').hasValue(v)).toBe(true));

  });

  it('should toggle the visibility of the elements of a set',() => {
    let value1 = new FormValue('1','1',true,true);
    let value2 = new FormValue('2','2',true,false);
    let value3 = new FormValue('3','3',true,false);
    let value4 = new FormValue('4','4',true,false);
    let value5 = new FormValue('5','5',true,false);
    let fieldset = new Fieldset([value1,value2,value3,value4,value5],false);

    let set1 = ['1','2'];
    fieldset.defineSet('one', set1);

    fieldset.set.getSet('one').toggle();
    expect(fieldset.set.getSet('one')[0].isVisible()).toBe(false);
    expect(fieldset.set.getSet('one')[1].isVisible()).toBe(false);
    fieldset.set.getSet('one')[0].visible = true;
    fieldset.set.getSet('one').toggle();
    expect(fieldset.set.getSet('one')[0].isVisible()).toBe(false);
    expect(fieldset.set.getSet('one')[1].isVisible()).toBe(true);
  });
});
