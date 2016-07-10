/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GroupsComponent } from './groups.component';

describe('Component: Groups', () => {
  it('should create an instance', () => {
    let component = new GroupsComponent();
    expect(component).toBeTruthy();
  });
});
