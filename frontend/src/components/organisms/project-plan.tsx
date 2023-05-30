import {type ProjectDetailsInterface} from 'src/interfaces/project.interface';
import {Center} from '@chakra-ui/react';
import {Item} from '../moleclues/item';

type Props = {
	project: ProjectDetailsInterface;
};

export const ProjectPlan = ({project}: Props) => {
	console.log();
	return (
		<Center width={'100%'} maxH={'80vh'} style={{backgroundColor: 'red'}}>
			<rect fill='#efefef' width='100%' height='100%' style={{backgroundColor: '#ffffff'}}>
				<svg height={'80vh'}
					viewBox={`0 0 ${project.width} ${project.height}`}>
					{project?.items.map((item, i) => (
						<Item item={item} key={i}/>
					))}
				</svg>
			</rect>

		</Center>

	);
};
