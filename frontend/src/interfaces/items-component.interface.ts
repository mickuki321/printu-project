import {type ProjectDetailsInterface} from 'src/interfaces/project.interface';

export type ItemsComponentInterface = {
	mouseMouseOut: () => void;
	mouseOverItem: (index: number) => void;
	indexSelectedItem?: number;
	project?: ProjectDetailsInterface;
};
