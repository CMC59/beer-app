import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Biere } from '../../models/biere';

@Component({
    selector: 'app-biere-card',
    templateUrl: './biere-card.component.html',
    styleUrls: ['./biere-card.component.scss']
})
export class BiereCardComponent implements OnInit {

    @Input() selectedBiere: Biere;
    @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
        this.received.emit(true);

    }
}
