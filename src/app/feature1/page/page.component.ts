import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/core.service';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private creService: CoreService) { }

  ngOnInit() {
    this.creService.do();
  }

}
