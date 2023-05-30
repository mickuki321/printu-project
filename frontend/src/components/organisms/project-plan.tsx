import {Center} from '@chakra-ui/react';
import {Item} from '../moleclues/item';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';

export const ProjectPlan = ({project, indexSelectedItem, mouseOverItem, mouseMouseOut}: ItemsComponentInterface) => (
	<Center width={'100%'} maxH={'80vh'} style={{backgroundColor: 'red'}}>
		{project && <rect fill='#efefef' width='100%' height='100%' style={{backgroundColor: '#ffffff'}}>
			<svg height={'80vh'}
				viewBox={`0 0 ${project.width} ${project.height}`}>
				{project?.items.map((item, i) => (
					<Item item={item} key={i} isHovered={i === indexSelectedItem} mouseMouseOut={mouseMouseOut}
						mouseOverItem={() => {
							mouseOverItem(i);
						}}/>
				))}
				<use xlinkHref='#one'/>
			</svg>
		</rect>}

	</Center>

);
