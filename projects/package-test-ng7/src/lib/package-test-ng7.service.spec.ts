import { TestBed } from '@angular/core/testing';

import { PackageTestNg7Service } from './package-test-ng7.service';

describe('PackageTestNg7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageTestNg7Service = TestBed.get(PackageTestNg7Service);
    expect(service).toBeTruthy();
  });
});
