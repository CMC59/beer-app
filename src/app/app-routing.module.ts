import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'bieres',
  pathMatch: 'full'
},
{
  path: 'bieres',
  loadChildren: () => import('./biere/biere.module').then(m => m.BiereModule)
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
