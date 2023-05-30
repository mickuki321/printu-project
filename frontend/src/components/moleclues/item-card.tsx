import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {CardBox, Record} from 'src/components/atoms';

type Props = {
	item: ProjectItemInterface;
	isHovered: boolean;
	mouseMouseOut: () => void;
	mouseOverItem: () => void;
};

export const ItemCard = ({item, isHovered, mouseMouseOut, mouseOverItem}: Props) => (
	<CardBox isHovered={isHovered} onMouseOut={mouseMouseOut} onMouseOver={mouseOverItem}>
		<Record label='Id' value={item.id}/>
		<Record label='Type' value={item.type}/>
		<Record label='Color' value={item.color}/>
		<Record label='Rotation' value={item.rotation}/>
		<Record label='X' value={item.x}/>
		<Record label='Y' value={item.y}/>
		<Record label='Width' value={item.width}/>
		<Record label='Height' value={item.height}/>
	</CardBox>
);
