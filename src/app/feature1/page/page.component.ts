import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../core/core.service';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() fff;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.do();
  }

}
