import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDynamicComponent } from './app-dynamic-component/app-dynamic.component';
import { AppResolver } from './shared/app.resolver';

const routes: Routes = [
  {
    path: 'signature2',
    loadChildren: () => import('./signature/signature.module').then(m => m.Signature2Module),
  },
  {
    path: 'project-overview',
    component: AppDynamicComponent,
    resolve: {
      page: AppResolver
    }
  },
  {
    path: 'project-detail',
    component: AppDynamicComponent,
    resolve: {
      page: AppResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
