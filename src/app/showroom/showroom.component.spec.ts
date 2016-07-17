/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormService } from '../services/form.service'

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShowroomComponent } from './showroom.component';

describe('Component: Showroom', () => {
  it('should create an instance', () => {
    let component = new ShowroomComponent(new FormService());
    expect(component).toBeTruthy();
  });
});
