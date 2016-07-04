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
    let fieldset = new Fieldset([new FormValue('1','1',true,false)],false);
    expect(fieldset).toBeTruthy();
  });
});
