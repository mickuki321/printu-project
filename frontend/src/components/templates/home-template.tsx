import {Box, Flex} from '@chakra-ui/react';
import {type ProjectInterface} from 'src/interfaces/project.interface';
import {type Dispatch, useState} from 'react';
import {ItemMenu, ProjectDetailsBox, SearchBox} from 'src/components/organisms';
import {type ItemsComponentInterface} from 'src/interfaces/items-component.interface';
import {ProjectPlan} from 'src/components/organisms';

interface Props {
	projectData?: ProjectInterface;
	searchValue: string;
	setSearchValue: Dispatch<string>;
	handlerSearch: () => void;
}

export const HomeTemplate = ({projectData, searchValue, handlerSearch, setSearchValue}: Props) => {
	const [indexSelectedItem, setIndexSelectedItem] = useState<number>();
	const mouseOverItem = (index: number) => {
		setIndexSelectedItem(index);
	};

	const mouseMouseOut = () => {
		setIndexSelectedItem(undefined);
	};

	const itemsComponentProps: ItemsComponentInterface | undefined = projectData && {
		mouseMouseOut,
		mouseOverItem,
		indexSelectedItem,
		project: projectData.project,
	};

	return (
		<Flex h='calc(100vh - 90px)' justifyContent='flex-end'>
			{itemsComponentProps && <ProjectPlan {...itemsComponentProps}/>}
			<Box h='100%'>
				<SearchBox searchValue={searchValue} handlerSearch={handlerSearch} setSearchValue={setSearchValue}/>
				{projectData && <ProjectDetailsBox projectData={projectData}/>}
				{itemsComponentProps && <ItemMenu {...itemsComponentProps}/>}
			</Box>
		</Flex>
	);
};
