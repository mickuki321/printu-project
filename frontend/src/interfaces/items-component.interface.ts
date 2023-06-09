import {type ProjectDetailsInterface} from 'src/interfaces/project.interface';

export interface ItemsComponentInterface {
	mouseMouseOut: () => void;
	mouseOverItem: (index: number) => void;
	indexSelectedItem?: number;
	project?: ProjectDetailsInterface;
}
