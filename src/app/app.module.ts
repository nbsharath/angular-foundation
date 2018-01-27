import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//third party
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffCanvasComponent } from './components/off-canvas/off-canvas.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    OffCanvasComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     MdButtonModule, MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
