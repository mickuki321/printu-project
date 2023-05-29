import {useEffect, useState} from 'react';

import {getProject} from '../../api/project';
import {Box} from '@chakra-ui/react';
import {type ProjectInterfaceInterface} from 'src/interfaces/project.interface';

export const Home = () => {
	const [project, setProject] = useState<ProjectInterfaceInterface>();
	console.log(project);
	useEffect(() => {
		const init = async () => {
			const response = await getProject({id: 'cli96tmcb000908mfaamjbple-8184267581641393'});
			if (response) {
				setProject(response);
			}
		};

		if (!project) {
			init();
		}
	}, [project]);

	return <Box>

	</Box>;
};
