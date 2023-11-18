import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AbstractUserDataService } from './list-user/services/abstract-user-data.service';
import { UserDataService } from './list-user/services/user-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    {
      provide: AbstractUserDataService,
      useClass: UserDataService ,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
