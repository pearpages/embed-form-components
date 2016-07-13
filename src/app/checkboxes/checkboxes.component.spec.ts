/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CheckboxesComponent } from './checkboxes.component';
import { FormService} from '../form.service';

describe('Component: CheckboxesComponent', () => {
  it('should create an instance', () => {
    let component = new CheckboxesComponent();
    expect(component).toBeTruthy();
  });
});
