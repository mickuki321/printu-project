export type ProjectItemInterface = {
	id: 'string';
	type: 'rectangle' | 'ellipse';
	color: 'string';
	rotation: number;
	x: number;
	y: number;
	width: number;
	height: number;
};

export type ProjectDetailsInterface = {
	id: 'string';
	name: 'string';
	width: 'string';
	height: 'string';
	items: ProjectItemInterface[];
};

export type ProjectInterface = {
	id: 'string';
	project: ProjectDetailsInterface;
};

export type ProjectInitInterface = {
	id: 'string';
	name: string;
	modified: number;
};
