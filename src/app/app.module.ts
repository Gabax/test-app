import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [AppComponent, ProgressTrackerComponent, SliderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
