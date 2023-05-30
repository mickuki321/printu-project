import {type ProjectItemInterface} from 'src/interfaces/project.interface';

type Props = {
	item: ProjectItemInterface;
};

export const RawEllipse = ({item}: Props) => {
	const width = item.width / 2;
	const height = item.height / 2;
	return (
		<ellipse
			fill={item.color}
			cx={width}
			rx={width}
			cy={height}
			ry={height}
			data-x={item.x}
			data-y={item.y}
			transform={`translate(${item.x}, ${item.y}) rotate(${item.rotation})  translate(-${width},-${height})`}
		/>
	);
};
