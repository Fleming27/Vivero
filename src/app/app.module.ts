import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PlantasModule } from './plantas/plantas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PlantasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
