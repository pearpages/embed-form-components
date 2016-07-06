/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PrimaryexcessComponent } from './primaryexcess.component';
import { FormService } from '../form.service';


describe('Component: Primaryexcess', () => {
  it('should create an instance', () => {
    let component = new PrimaryexcessComponent(new FormService());
    expect(component).toBeTruthy();
  });
});
