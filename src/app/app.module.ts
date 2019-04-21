import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core'; // import injector
import { APP_BASE_HREF } from '@angular/common';
import { createCustomElement } from '@angular/elements'; // Added createCustomElement from angular elements

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    NgCardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }],
  // bootstrap: [AppComponent]
  entryComponents: [NgCardElementComponent] // use entryComponents array instaed of bootstrap because it will be added dynamically.
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    // using built in the browser to create your own custom element name
    customElements.define('facebook-card', el);
  }
}
