import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipDirective } from './directives/tooltip.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent, TooltipDirective],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration(), MatTooltip],
  bootstrap: [AppComponent],
})
export class AppModule {}
