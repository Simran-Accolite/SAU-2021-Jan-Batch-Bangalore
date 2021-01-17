import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { SessionComponent } from './session/session.component';
import { NavigateComponent } from './todo/todo.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SessionComponent
  },
  {
    path: "nav",
    component: NavigateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
