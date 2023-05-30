import {Box} from '@chakra-ui/react';
import {ProjectPlan} from 'src/components/organisms/project-plan';
import {type ProjectInterfaceInterface} from 'src/interfaces/project.interface';

type Props = {
	projectData: ProjectInterfaceInterface;
};

export const HomeTemplate = ({projectData}: Props) => (
	<Box>
		{projectData?.project && <ProjectPlan project={projectData.project}/>}
	</Box>
);
