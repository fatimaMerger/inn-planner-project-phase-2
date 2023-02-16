import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SHAREDZORROMODULESModule } from 'src/shared-zorro-modules/shared-zorro-modules.module';

// import { FooterComponent } from './shared-module/footer/footer.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModuleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SHAREDZORROMODULESModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [
    SHAREDZORROMODULESModule
    ]
})
export class AppModule { }
