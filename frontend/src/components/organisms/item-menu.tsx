import {Box} from '@chakra-ui/react';
import {ItemCard} from 'src/components/moleclues';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';

export const ItemMenu = ({project, indexSelectedItem, mouseOverItem, mouseMouseOut}: ItemsComponentInterface) => (
	<Box overflowY='auto' maxH='500px'>
		{project?.items.map((item, i) => (
			<ItemCard key={i} item={item} isHovered={i === indexSelectedItem} mouseMouseOut={mouseMouseOut}
				mouseOverItem={() => {
					mouseOverItem(i);
				}}/>
		))}
	</Box>
);
