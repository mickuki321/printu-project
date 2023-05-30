import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {CardBox, Record} from 'src/components/atoms';
import {Box, Center} from '@chakra-ui/react';
import {GeometricFigure} from 'src/components/atoms/svg-components/geometric-figure';

type Props = {
	item: ProjectItemInterface;
	isHovered: boolean;
	mouseMouseOut: () => void;
	mouseOverItem: () => void;
};

export const ItemCard = ({item, isHovered, mouseMouseOut, mouseOverItem}: Props) => (
	<CardBox isHovered={isHovered} onMouseOut={mouseMouseOut} onMouseOver={mouseOverItem}>
		<Center w={'180px'} borderRight='1px solid' borderColor='gray.300' p={4}>
			<svg height={'100px'} width={'100px'}
				viewBox={`0 0 ${item.width + 100} ${item.height + 100}`}>
				<GeometricFigure item={{
					...item,
					x: (item.width / 2) + 50,
					y: (item.height / 2) + 50,
				}}/>
			</svg>
		</Center>
		<Box p={4}>
			<Record label='Id' value={item.id}/>
			<Record label='Type' value={item.type}/>
			<Record label='Color' value={item.color}/>
			<Record label='Rotation' value={item.rotation}/>
			<Record label='X' value={item.x}/>
			<Record label='Y' value={item.y}/>
			<Record label='Width' value={item.width}/>
			<Record label='Height' value={item.height}/>
		</Box>
	</CardBox>
);
