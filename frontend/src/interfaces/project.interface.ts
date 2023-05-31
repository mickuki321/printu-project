export interface ProjectItemInterface {
	id: 'string';
	type: 'rectangle' | 'ellipse';
	color: 'string';
	rotation: number;
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface ProjectDetailsInterface {
	id: 'string';
	name: 'string';
	width: 'string';
	height: 'string';
	items: ProjectItemInterface[];
}

export interface ProjectInterface {
	id: 'string';
	project: ProjectDetailsInterface;
}

export interface ProjectInitInterface {
	id: 'string';
	name: string;
	modified: number;
}
