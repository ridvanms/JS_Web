import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from "@angular/common/http"
import { AlbumComponent } from './album/album.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AlbumModule } from './album/album.module';
import { CommentsModule } from './comments/comments.module';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MatListModule,
    MatDividerModule,
    AlbumModule,
    CommentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
