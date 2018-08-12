import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './component/main/main.component';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdminService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
