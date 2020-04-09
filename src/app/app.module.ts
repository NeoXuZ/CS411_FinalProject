import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { AuthGuard } from './auth.guard';
import { TokenIntercetorService } from './token-intercetor.service';
import { CelebritySearchComponent } from './celebrity-search/celebrity-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';
import { CelebritylistComponent } from './celebritylist/celebritylist.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    SpecialEventsComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    CelebritySearchComponent,
    DashboardComponent,
    CelebrityDetailComponent,
    CelebritylistComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    CommonModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthService, EventsService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercetorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
