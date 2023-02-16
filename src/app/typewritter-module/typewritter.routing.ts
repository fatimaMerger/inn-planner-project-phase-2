import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TyperwritterComponent } from './typerwritter.component';

const routes: Routes = [
    {
        path: '',
        component: TyperwritterComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class typewriterRoutingModule {}
