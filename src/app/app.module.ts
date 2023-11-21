import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AbstractUserDataService } from './list-user/services/abstract-user-data.service';
import { UserDataService } from './list-user/services/user-data.service';
import { AbstractUserGroupDataService } from './list-user-group/services/abstract-user-group-data.service';
import { UserGroupDataService } from './list-user-group/services/user-group-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    {
      provide: AbstractUserDataService,
      useClass: UserDataService,
    },
    {
      provide: AbstractUserGroupDataService,
      useClass: UserGroupDataService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
