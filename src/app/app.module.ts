import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBlockComponent } from './color-block/color-block.component';
import { ConfirmModuleComponent } from './confirm-module/confirm-module.component';
import { PickedColorsComponent } from './picked-colors/picked-colors.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    ConfirmModuleComponent,
    PickedColorsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
