/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ReportingfiguresComponent } from './reportingfigures.component';
import { FormService } from '../form.service';

describe('Component: Reportingfigures', () => {
  it('should create an instance', () => {
    let component = new ReportingfiguresComponent(new FormService());
    expect(component).toBeTruthy();
  });
});
