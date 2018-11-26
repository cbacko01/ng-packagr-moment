import { NgModule } from '@angular/core';
import { PackageTestNg7Component } from './package-test-ng7.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    PackageTestNg7Component,
    FooComponent,
  ],
  imports: [
  ],
  exports: [
    PackageTestNg7Component,
    FooComponent,
  ]
})
export class PackageTestNg7Module { }
