import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeModuleComponent } from './home-module/home-module.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SharedRoutes } from './shared-module.routing';
import { SEBIDisclosureComponent } from './sebi-disclosure/sebi-disclosure.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorCharterComponent } from './investor-charter/investor-charter.component';
import { SHAREDZORROMODULESModule } from 'src/shared-zorro-modules/shared-zorro-modules.module';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { StartHereComponent } from './start-here/start-here.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SlickTestimonialsComponent } from './slick-testimonials/slick-testimonials.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SafePipe } from './safe.pipe';
import { FixedMobileButtonComponent } from './fixed-mobile-button/fixed-mobile-button.component';





@NgModule({
  declarations: [
    FooterComponent,
    HomeModuleComponent,
    TopNavBarComponent,
    SEBIDisclosureComponent,
    PrivacyPolicyComponent,
    FaqsComponent,
    AboutUsComponent,
    InvestorCharterComponent,
    SectionHeadingComponent,
    StartHereComponent,
    TestimonialsComponent,
    SlickTestimonialsComponent,
    GetInTouchComponent,
    ServicesComponent,
    TermsAndConditionsComponent,
    SafePipe,
    FixedMobileButtonComponent
    
  ],
  imports: [
  CommonModule,
    SharedRoutes,
    SHAREDZORROMODULESModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    
  ],
  exports: [
    FooterComponent,
    HomeModuleComponent,
    TopNavBarComponent,
    SHAREDZORROMODULESModule,
    StartHereComponent,
    TestimonialsComponent,
    SlickTestimonialsComponent,
    FormsModule,
    RouterModule,
    SafePipe,
    FixedMobileButtonComponent
  ]
})
export class SharedModuleModule { }
