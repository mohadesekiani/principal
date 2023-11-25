import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractDataService } from './core/base-services/abstract-data-service';
import { IUser } from './core/model/interface/user.interface';
import { UserDataService } from './list-user/services/user-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    {
      provide: AbstractDataService<IUser>,
      useClass: UserDataService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
