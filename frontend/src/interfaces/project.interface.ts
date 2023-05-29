export type ProjectItemInterface = {
	id: 'string';
	type: 'rectange' | 'ellipse';
	color: 'string';
	rotation: 'number';
	x: 'number';
	y: 'number';
	width: 'number';
	height: 'number';
};

export type ProjectDetailsInterface = {
	id: 'string';
	name: 'string';
	width: 'string';
	height: 'string';
	items: ProjectItemInterface;
};

export type ProjectInterfaceInterface = {
	id: 'string';
	project: ProjectDetailsInterface;
};
