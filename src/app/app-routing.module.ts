import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared-module/shared-module.module').then(m => m.SharedModuleModule)
  },
  {
    path: 'adminpanel',
    loadChildren: () => import('./adminpanel/adminpanel.module').then(m => m.AdminpanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
