/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Showroom2Component } from './showroom2.component';
import { FormService } from '../services/form.service';

describe('Component: Showroom2', () => {
  it('should create an instance', () => {
    let component = new Showroom2Component(new FormService());
    expect(component).toBeTruthy();
  });
});
