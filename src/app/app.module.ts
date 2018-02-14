import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './services/test.service';
import { Test2Service } from './services/test2.service';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [TestService , Test2Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
