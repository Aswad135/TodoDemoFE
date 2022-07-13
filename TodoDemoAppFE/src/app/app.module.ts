import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListViewComponent} from './layout/todo-list-view/todo-list-view.component';
import {TodoViewComponent} from './layout/todo-view/todo-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./services/http.service";
import {ApiService} from "./services/api.service";
import {ClipboardModule} from "ngx-clipboard";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    TodoListViewComponent,
    TodoViewComponent
  ],
    imports: [
        BrowserModule,
        MatButtonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
        ClipboardModule,
        MatIconModule,
        FormsModule,
        MatCheckboxModule,
    ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
