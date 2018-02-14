import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { PageComponent } from './page/page.component';

import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule,
    SharedModule
  ],
  declarations: [PageComponent]
})
export class Feature1Module { }
