import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTestNg7Component } from './package-test-ng7.component';

describe('PackageTestNg7Component', () => {
  let component: PackageTestNg7Component;
  let fixture: ComponentFixture<PackageTestNg7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageTestNg7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageTestNg7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
