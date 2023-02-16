import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminfaqsComponent } from './adminfaqs/adminfaqs.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminteamComponent } from './adminteam/adminteam.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminStartHereComponent } from './admin-start-here/admin-start-here.component';
import { AdminInvestorComponent } from './admin-investor/admin-investor.component';
import { AdminTermsConditionComponent } from './admin-terms-condition/admin-terms-condition.component';
import { AdminPrivacyPolicyComponent } from './admin-privacy-policy/admin-privacy-policy.component';
import { AdminSamplePdfComponent } from './admin-sample-pdf/admin-sample-pdf.component';
import { AdminDisclosureComponent } from './admin-disclosure/admin-disclosure.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
          path: 'adminfaqs',
          component: AdminfaqsComponent
      },
      {
          path: 'admintestimonials',
          component: AdmintestimonialsComponent
      },
      {
        path: 'adminteam',
        component: AdminteamComponent
       },
      {
        path: 'adminservice',
        component: AdminServiceComponent
      },
      {
        path: 'admincontact',
        component: AdminContactComponent
      },
      {
        path: 'adminstarthere',
        component: AdminStartHereComponent
      },
      {
        path: 'admininvestor',
        component:AdminInvestorComponent
      },
      {
        path:'adminTermsCond',
        component:AdminTermsConditionComponent
      },
      {
        path:'privacyPolicy',
        component:AdminPrivacyPolicyComponent
      },
      {
        path:'adminsample',
        component:AdminSamplePdfComponent
      },
      {
        path:'admindisclosure',
        component:AdminDisclosureComponent
      }
      
      
    
    ],
      // { path: 'overview', component: DashboardOverviewComponent },
    },
    
    {
      path: 'login',
      component: LoginComponent
  }
];

export const AdminModulePanelRoutes: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);