import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing module
import { AppRoutingModule,routingComponent } from './app-routing.module';


import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { RegisterComponent } from './register/register.component';
 
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProductsTableComponent,
    routingComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
