import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_routing} from './routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GroupsearchComponent } from './groupsearch/groupsearch.component';
import { SidetabsComponent } from './sidetabs/sidetabs.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    GroupsearchComponent,
    SidetabsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
