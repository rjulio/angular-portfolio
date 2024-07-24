import { Component, signal } from '@angular/core';
import { IProjects } from '@portfolio/interface/IProjects.interface';

@Component({
	selector: 'app-projects',
	standalone: true,
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
	imports: []
})

export class ProjectsComponent {
	public arrayProjects = signal<IProjects[]>([
		{
			src: 'assets/img/projects/vfull.png',
			alt: '',
			title: 'Vida fullstack',
			width: '100px',
			height: '51px',
			description: 'texto de description',
			links: [
				{
					name: 'Conheça o blog',
					href: 'https://vidafullstack.com.br'
				}
			]
		}
	]);
}