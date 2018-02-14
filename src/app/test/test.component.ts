import { Component, OnInit, Input } from '@angular/core';

import { TestService } from './../services/test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() sss;
  ccc;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.ccc = this.testService.get();
  }

}
