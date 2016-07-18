/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TypeOfViewComponent } from './type-of-view.component';

describe('Component: TypeOfView', () => {
  it('should create an instance', () => {
    let component = new TypeOfViewComponent();
    expect(component).toBeTruthy();
  });
});
