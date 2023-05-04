import { BiereService } from './../../services/biere.service';
import { Biere } from '../../models/biere';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface BiereFormData {
    isCreateForm: boolean;
    biere: Biere;
}

@Component({
    selector: 'app-biere-form',
    templateUrl: './biere-form.component.html',
    styleUrls: ['./biere-form.component.scss']
})
export class BiereFormComponent implements OnDestroy {

    private destroy$: Subject<boolean> = new Subject<boolean>();

    degree: string[] = ["1", "2", "3", "4", "5", "5,5", "6", "7", "8", "8,5", "9", "10", "11", "12"];

    couleur: string[] = ["BLANCHE", "BLONDE", "DORÉE", "ROUSSE", "AMBRÉE-CLAIRE", "AMBRÉE", "AMBRÉE-FONCÉE", "BRUNE", "BRUNE-FONCÉE", "NOIRE"];

    amertume: string[] = [
        "PILS", "LAGER", "PORTER", "PALE-ALE", "ENGLISH-BITTER", "IPA", "DOUBLE-IPA", "IMPERIAL-IPA", "BARLEYWINE", "STOUT", "IMPERIAL-STOUT"
    ];

    class: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

    biereForm = this.fb.group({
        id: [0, [Validators.required]],
        name: ['', [Validators.required]],
        degree: ['', [Validators.required]],
        couleur: ['', [Validators.required]],
        amertume: ['', [Validators.required]],
        class: ['', [Validators.required]],

    });

    constructor(public dialogRef: MatDialogRef<BiereFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: BiereFormData, private fb: FormBuilder,
        private biereService: BiereService, private _snackBar: MatSnackBar) {

        if (!data.isCreateForm) {
            this.setBiereForm(data.biere);
        }

    }
    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    setBiereForm(biere: Biere) {
        this.biereForm.setValue({
            id: biere.id,
            name: biere.name,
            degree: biere.degree,
            couleur: biere.couleur,
            amertume: biere.amertume,
            class: biere.class,
        });
    }

    get title() {
        if (this.data.isCreateForm) {
            return 'Formulaire de création';
        }
        return 'Formulaire de modification';
    }

    get submitBtnName() {
        if (this.data.isCreateForm) {
            return 'Ajouter';
        }
        return 'Modifier';
    }

    onSubmit() {
        if (this.biereForm.valid) {
            if (this.data.isCreateForm) {
                this.biereForm.value.id = Date.now() + Math.random();
                this.biereService.create(this.biereForm.value as Biere)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(result => {
                        this._snackBar.open(result, '', {
                            duration: 2000,
                            panelClass: ['bg-success']
                        });

                        this.dialogRef.close(true);
                    });
            } else {
                this.biereService.update(this.biereForm.value as Biere)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(result => {
                        this._snackBar.open(result, '', {
                            duration: 2000,
                            panelClass: ['bg-success']
                        });
                        this.dialogRef.close(true);
                    });
            }
        }
    }
}
