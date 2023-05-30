import {Box} from '@chakra-ui/react';
import {ItemCard} from 'src/components/moleclues/item-card';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';

export const ItemMenu = ({project, indexSelectedItem, mouseOverItem, mouseMouseOut}: ItemsComponentInterface) => (
	<Box>
		<Box h='100%' overflowY='auto'>
			{project?.items.map((item, i) => (
				<ItemCard key={i} item={item} isHovered={i === indexSelectedItem} mouseMouseOut={mouseMouseOut}
					mouseOverItem={() => {
						mouseOverItem(i);
					}}/>
			))}
		</Box>
	</Box>
);
