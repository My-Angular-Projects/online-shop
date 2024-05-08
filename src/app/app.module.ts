import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { ProductPageComponent } from './shared/product-page/product-page.component';
import { CartPageComponent } from './shared/cart-page/cart-page.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './store/app.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
