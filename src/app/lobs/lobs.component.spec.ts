/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LobsComponent } from './lobs.component';
import { FormService } from '../form.service';

describe('Component: Lobs', () => {
  it('should create an instance', () => {
    let component = new LobsComponent(new FormService());
    expect(component).toBeTruthy();
  });
});
