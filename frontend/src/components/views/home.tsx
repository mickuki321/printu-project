import {useEffect, useState} from 'react';

import {getProject} from '../../api/project';
import {Box} from '@chakra-ui/react';
import {type ProjectInterfaceInterface} from '../../interfaces/project.interface';
import {HomeTemplate} from 'src/components/templates/home-template';

export const Home = () => {
	const [projectData, setProjectData] = useState<ProjectInterfaceInterface>();
	useEffect(() => {
		const init = async () => {
			const response = await getProject({id: 'clia8pzxt000008mmgfx46x88-9154506585035734'});
			if (response) {
				setProjectData(response);
			}
		};

		if (!projectData) {
			init();
		}
	}, [projectData]);

	return (
		<Box>
			{projectData && <HomeTemplate projectData={projectData}/>}
		</Box>
	);
};
