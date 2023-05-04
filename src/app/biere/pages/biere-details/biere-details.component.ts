import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiereService } from '../../services/biere.service';
import { Observable } from 'rxjs';
import { Biere } from '../../models/biere';
import { Location } from '@angular/common';

@Component({
    selector: 'app-biere-details',
    templateUrl: './biere-details.component.html',
    styleUrls: ['./biere-details.component.scss']
})
export class BiereDetailsComponent implements OnInit {

    biereId: number;
    biere$: Observable<Biere>;

    constructor(private route: ActivatedRoute, private biereService: BiereService, private _location: Location) {
        /* route.params.subscribe(params => {
           this.biereId = params['id'];
         });*/
        this.biereId = +this.route.snapshot.paramMap.get('id');
    }
    ngOnInit(): void {
        if (this.biereId) {
            this.biere$ = this.biereService.getById(this.biereId);
        }
    }
    backClicked() {
        this._location.back();
    }


    showReceivedValue(value: boolean) {
        console.log(value);
    }
}
