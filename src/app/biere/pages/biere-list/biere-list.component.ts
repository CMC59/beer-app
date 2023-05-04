import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { Observable } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { BiereFormComponent } from '../../components/biere-form/biere-form.component';
import { Biere } from '../../models/biere';
import { BiereService } from '../../services/biere.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-biere-list',
    templateUrl: './biere-list.component.html',
    styleUrls: ['./biere-list.component.scss']
})
export class BiereListComponent implements OnInit, OnDestroy {


    displayedColumns: string[] = ['name', 'degree', 'couleur', 'amertume', 'class', 'update', 'delete'];

    bieres$: Observable<Biere[]>;

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private biereService: BiereService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router) {


    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit(): void {
        this.fetchData();
    }

    fetchData() {
        this.bieres$ = this.biereService.get();
    }
    openBiereForm(biere?: Biere) {
        const dialogRef = this.dialog.open(BiereFormComponent, {
            height: '85%',
            width: '60%',
            data: {
                isCreateForm: biere ? false : true,
                biere: biere ? biere : undefined
            }
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.fetchData();
                }
            });
    }
    delete(id: number) {
        const ref = this.dialog.open(GenericPopupComponent, {
            data: {
                title: 'Confirmation de suppression',
                message: 'êtes-vous sûr de vouloir supprimer cette bière ?',
                typeMessage: 'none',
                yesButtonVisible: true,
                noButtonVisible: true,
                cancelButtonVisible: false,
                defaultButton: 'No',
                yesButtonLabel: 'Oui',
                noButtonLabel: 'Non',
            },
        })

        ref.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.biereService.delete(id)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe(result => {
                            this._snackBar.open(result, '', {
                                duration: 2000,
                                panelClass: ['bg-success']
                            });
                            this.fetchData();
                        });
                }
            });
    }

    showBiereDetails(biereId: number) {
        this.router.navigate(['/bieres/' + biereId])
    }

}