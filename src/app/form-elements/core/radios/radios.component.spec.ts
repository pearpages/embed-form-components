/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RadiosComponent } from './radios.component';
import { FormService} from '../../../services/form.service';

describe('Component: RadiosComponent', () => {
  
  it('should create an instance', () => {
    let component = new RadiosComponent(new FormService());
    expect(component).toBeTruthy();
  });

  
});
