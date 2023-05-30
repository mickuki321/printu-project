import {Box} from '@chakra-ui/react';
import {ItemCard} from 'src/components/moleclues/item-card';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';

export const ItemMenu = ({project, indexSelectedItem, mouseOverItem, mouseMouseOut}: ItemsComponentInterface) => (
	<Box w='100%'>
		<Box h='80vh' overflowY='auto'>
			{project?.items.map((item, i) => (
				<ItemCard key={i} item={item} isHovered={i === indexSelectedItem} mouseMouseOut={mouseMouseOut}
					mouseOverItem={() => {
						mouseOverItem(i);
					}}/>
			))}
		</Box>
	</Box>
);
