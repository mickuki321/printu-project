import {CardBox, Record} from 'src/components/atoms';
import {type ProjectInterface} from 'src/interfaces/project.interface';
import {Title} from 'src/components/atoms/text/title';

type Props = {
	projectData: ProjectInterface;

};
export const ProjectDetailsBox = ({projectData: {id, project}}: Props) => (
	<CardBox justifyItems='center' alignItems='center' p={4} flexDirection='column' mb={0}>
		<Title>Project details</Title>
		<Record label='Id' value={id}/>
		<Record label='Width' value={project.width}/>
		<Record label='Height' value={project.height}/>
	</CardBox>
);
