/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MarketCompanyComponent } from './market-company.component';

describe('Component: MarcketCompany', () => {
  it('should create an instance', () => {
    let component = new MarketCompanyComponent();
    expect(component).toBeTruthy();
  });
});
