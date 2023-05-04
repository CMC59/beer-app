import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiereComponent } from './biere.component';
import { BiereListComponent } from './pages/biere-list/biere-list.component';
import { BiereDetailsComponent } from './pages/biere-details/biere-details.component';

const routes: Routes = [{
    path: '',
    component: BiereListComponent
},
{
    path: ':id',
    component: BiereDetailsComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BiereRoutingModule { }
