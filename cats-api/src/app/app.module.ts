import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StorageService } from './storage.service';
import { HttpClientModule } from '@angular/common/http';
import {LikeComponent} from './components/like/like.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreedSearchComponent } from './components/breed-search/breed-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LikeComponent,
    BreedSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
