interface IProjectsLinks {
	name: string;
	href: string;
}

export interface IProjects {
	src: string;
	alt: string;
	title: string;
	width: string;
	height: string;
	description: string;
	links: IProjectsLinks[]
}