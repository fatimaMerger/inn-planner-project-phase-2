import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { AdminfaqsComponent } from './adminfaqs/adminfaqs.component';
import { AdminModulePanelRoutes } from './adminpanel.routing';
import { SHAREDZORROMODULESModule } from 'src/shared-zorro-modules/shared-zorro-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminteamComponent } from './adminteam/adminteam.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminStartHereComponent } from './admin-start-here/admin-start-here.component';
import { AdminInvestorComponent } from './admin-investor/admin-investor.component';
import { AdminTermsConditionComponent } from './admin-terms-condition/admin-terms-condition.component';
import { AdminPrivacyPolicyComponent } from './admin-privacy-policy/admin-privacy-policy.component';
import { AdminSamplePdfComponent } from './admin-sample-pdf/admin-sample-pdf.component';
import { AdminDisclosureComponent } from './admin-disclosure/admin-disclosure.component';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    AdmintestimonialsComponent,
    AdminfaqsComponent,
    AdminHeaderComponent,
    AdminteamComponent,
    AdminServiceComponent,
    AdminContactComponent,
    AdminStartHereComponent,
    AdminInvestorComponent,
    AdminTermsConditionComponent,
    AdminPrivacyPolicyComponent,
    AdminSamplePdfComponent,
    AdminDisclosureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminModulePanelRoutes,
    SHAREDZORROMODULESModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    ReactiveFormsModule,
    LayoutComponent,
    AdmintestimonialsComponent,
    AdminfaqsComponent,
    SHAREDZORROMODULESModule,
    FormsModule
  ]
})
export class AdminpanelModule { }
