import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { PhotosService } from './photos/photos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    UsersModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [GlobalLoaderService,PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
