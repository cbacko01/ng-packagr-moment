import { Component, OnInit } from '@angular/core';

import * as momentNs from 'moment';
const moment = momentNs;


@Component({
  selector: 'uig-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor() {
    let val = moment(new Date());
    console.log('moment test', val);
   }

  ngOnInit() {
  }

}
