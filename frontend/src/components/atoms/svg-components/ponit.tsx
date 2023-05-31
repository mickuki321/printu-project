import {type ProjectItemInterface} from 'src/interfaces/project.interface';

interface Props {
	item: ProjectItemInterface;
}

export const Point = ({item}: Props) => (
	<circle
		fill={'#fff'}
		r={2}
		cx={item.x}
		cy={item.y}
	/>
);
