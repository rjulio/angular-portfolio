import { Component, inject, signal } from '@angular/core';
import { IProjects } from '@portfolio/interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '@portfolio/enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '@portfolio/components/dialog/projects/dialog.component';

@Component({
	selector: 'app-projects',
	standalone: true,
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
	imports: [MatDialogModule, DialogProjectsComponent]
})

export class ProjectsComponent {
	private dialog = inject(MatDialog);
	public arrayProjects = signal<IProjects[]>([
		{
			src: 'assets/img/projects/vfull.png',
			alt: '',
			title: 'Vida fullstack',
			width: '100px',
			height: '51px',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id quas nulla perferendis soluta sapiente optio, labore, molestiae quasi, earum modi quia illo enim provident dolorum, sunt impedit. Modi, laboriosam.',
			links: [
				{
					name: 'Conheça o blog',
					href: 'https://vidafullstack.com.br'
				}
			]
		},
	]);

	public openDialog(data: IProjects) {
		this.dialog.open(DialogProjectsComponent, {
			data,
			panelClass: EDialogPanelClass.PROJECTS
		});
	}
}