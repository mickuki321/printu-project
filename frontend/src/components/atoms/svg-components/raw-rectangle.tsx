import {type ProjectItemInterface} from 'src/interfaces/project.interface';

interface Props {
	item: ProjectItemInterface;
}

export const RawRectangle = ({item}: Props) => (
	<rect
		fill={item.color}
		width={item.width}
		height={item.height}
		transform={`translate(${item.x}, ${item.y}) rotate(${item.rotation})  translate(-${item.width / 2},-${item.height / 2})`}
	/>
);
