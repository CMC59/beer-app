import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiereRoutingModule } from './biere-routing.module';
import { BiereComponent } from './biere.component';
import { SharedModule } from '../shared/shared.module';
import { BiereListComponent } from './pages/biere-list/biere-list.component';
import { BiereService } from './services/biere.service';
import { BiereFormComponent } from './components/biere-form/biere-form.component';
import { BiereDetailsComponent } from './pages/biere-details/biere-details.component';
import { BiereCardComponent } from './components/biere-card/biere-card.component';


@NgModule({
    declarations: [
        BiereComponent,
        BiereListComponent,
        BiereFormComponent,
        BiereDetailsComponent,
        BiereCardComponent
    ],
    imports: [
        CommonModule,
        BiereRoutingModule,
        SharedModule
    ],
    providers: [
        BiereService,
    ]
})
export class BiereModule { }
