/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LimitExceptionComponent } from './limit-exception.component';

describe('Component: LimitException', () => {
  it('should create an instance', () => {
    let component = new LimitExceptionComponent();
    expect(component).toBeTruthy();
  });
});
