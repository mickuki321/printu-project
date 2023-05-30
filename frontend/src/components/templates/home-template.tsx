import {Flex} from '@chakra-ui/react';
import {type ProjectInterfaceInterface} from 'src/interfaces/project.interface';
import {useState} from 'react';
import {ItemMenu} from 'src/components/organisms/item-menu';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';
import {ProjectPlan} from 'src/components/organisms/project-plan';

type Props = {
	projectData: ProjectInterfaceInterface;
};

export const HomeTemplate = ({projectData}: Props) => {
	const [indexSelectedItem, setIndexSelectedItem] = useState<number>();
	const {project} = projectData;
	const mouseOverItem = (index: number) => {
		setIndexSelectedItem(index);
	};

	const mouseMouseOut = () => {
		setIndexSelectedItem(undefined);
	};

	const itemsComponentProps: ItemsComponentInterface = {
		mouseMouseOut,
		mouseOverItem,
		indexSelectedItem,
		project,
	};

	return (
		<Flex h='calc(100vh - 90px)'>
			<ProjectPlan {...itemsComponentProps}/>
			<ItemMenu {...itemsComponentProps}/>
		</Flex>
	);
};
