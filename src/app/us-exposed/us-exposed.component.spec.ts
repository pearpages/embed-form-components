/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { UsExposedComponent } from './us-exposed.component';

describe('Component: UsExposed', () => {
  it('should create an instance', () => {
    let component = new UsExposedComponent();
    expect(component).toBeTruthy();
  });
});
