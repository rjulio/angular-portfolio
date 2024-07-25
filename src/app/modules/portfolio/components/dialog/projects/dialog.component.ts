import { Component, Inject, OnInit, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IProjects } from '@portfolio/interface/IProjects.interface';

@Component({
	selector: 'app-project-dialog',
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.scss',
	standalone: true,
	imports: [MatDialogModule]
})

export class DialogProjectsComponent implements OnInit{
	public getData = signal<IProjects | null>(null);

	constructor(
		private _dialogRef: MatDialogRef<DialogProjectsComponent>,
		@Inject(MAT_DIALOG_DATA) private _data: IProjects
	) {}

	ngOnInit(): void {
		this.getData.set(this._data);
	}

	public closeModal() {
		return this._dialogRef.close();
	}
}