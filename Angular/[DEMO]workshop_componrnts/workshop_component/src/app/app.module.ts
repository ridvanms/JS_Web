import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceService } from './services/user-service.service';
import { ApiRequestsService } from './services/api-requests.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService,ApiRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
