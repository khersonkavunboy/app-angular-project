import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import {MaterialModule} from './material/material.module';
import {HeaderContainerModule} from './header-container/header-container.module';
import { OverviewDetailsContainerComponent } from './overview-details-container/overview-details-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderContainerComponent,
    GridContainerComponent,
    ItemContainerComponent,
    OverviewDetailsContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
