import {type ProjectItemInterface} from 'src/interfaces/project.interface';

interface Props {
	item: ProjectItemInterface;
}

export const LabelFigure = ({item}: Props) => (
	<text
		x={item.x + 2}
		y={item.y + 2}
	>{item.rotation}</text>
);
