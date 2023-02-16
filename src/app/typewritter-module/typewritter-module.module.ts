import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyperwritterComponent } from './typerwritter.component';
import { typewriterRoutingModule } from './typewritter.routing';



@NgModule({
  declarations: [
    TyperwritterComponent
  ],
  imports: [
    typewriterRoutingModule,
    CommonModule
  ]
})
export class AngularTypewriterEffectModule {
  static getTypeWriterComponent() {
    return TyperwritterComponent;
  }
 }
