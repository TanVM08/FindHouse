import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './views/footer-component/footer-component.component';
import { HeaderComponentComponent } from './views/header-component/header-component.component';
import { HomeComponentComponent } from './views/home-component/home-component.component';
import { ListDataComponentComponent } from './views/list-data-component/list-data-component.component';
import { DataDetailComponentComponent } from './views/data-detail-component/data-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    ListDataComponentComponent,
    DataDetailComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
