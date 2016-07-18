/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MonthlyComparisonComponent } from './monthly-comparison.component';

describe('Component: MonthlyComparison', () => {
  it('should create an instance', () => {
    let component = new MonthlyComparisonComponent();
    expect(component).toBeTruthy();
  });
});
