import { Component, signal } from '@angular/core';
import { IExperiences } from '@portfolio/interface/experiences.interface';

@Component({
	selector: 'app-experiences',
	standalone: true,
	templateUrl: './experiences.component.html',
	styleUrl: './experiences.component.scss',
	imports: []
})

export class ExperiencesComponent {
	public arrayExperiences = signal<IExperiences[]>([
		{
			summary: {
				strong: 'Front-end Especialista',
				p: 'Órama DTVM | Ago 2013 - Atual'
			},
			text: `
				<p>Desde 2013 atuando como desenvolvedor front-end na Órama DTVM</p>
			`
		}
	]);
}