import { Injectable } from '@angular/core';

import { Test2Service } from './test2.service';

@Injectable()
export class TestService {

  constructor( private test2Service: Test2Service ) { }

  do() {
    console.log('aaa');
    this.test2Service.do();
  }
  get() {
    return 'return';
  }

}
