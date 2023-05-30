import {type ProjectItemInterface} from 'src/interfaces/project.interface';

type Props = {
	item: ProjectItemInterface;
};

export const Point = ({item}: Props) => (
	<circle
		fill={'#fff'}
		r={2}
		cx={item.x}
		cy={item.y}
	/>
);
