import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LpageComponent } from './lpage/lpage.component';




@NgModule({
  declarations: [
    AppComponent,
   LpageComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
