import {Center} from '@chakra-ui/react';
import {Item} from '../moleclues';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';

export const ProjectPlan = ({project, indexSelectedItem, mouseOverItem, mouseMouseOut}: ItemsComponentInterface) => (
	<Center width={'100%'} maxH={'100%'} p={4}>
		{project && <svg width='100%' height='100%' style={{backgroundColor: '#ffffff'}}
			viewBox={`0 0 ${project.width} ${project.height}`}>
			<rect fill='var(--chakra-colors-gray-50)' width='100%' height='100%'></rect>
			{project?.items.map((item, i) => (
				<Item item={item} key={i} isHovered={i === indexSelectedItem} mouseMouseOut={mouseMouseOut}
					mouseOverItem={() => {
						mouseOverItem(i);
					}}/>
			))}
			<use xlinkHref='#one'/>
		</svg>
		}

	</Center>

);
