import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    GridModule,
    ButtonsModule,
    DropDownsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
