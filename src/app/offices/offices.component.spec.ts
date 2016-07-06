/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { OfficesComponent } from './offices.component';
import { FormService} from '../form.service';

describe('Component: Offices', () => {
  it('should create an instance', () => {
    let component = new OfficesComponent(new FormService());
    expect(component).toBeTruthy();
  });
});
