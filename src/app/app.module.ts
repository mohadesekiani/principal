import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractDataService } from './core/services/abstract-data-service';
import { UserDataService } from './core/services/user-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    {
      provide: AbstractDataService,
      useClass: UserDataService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
