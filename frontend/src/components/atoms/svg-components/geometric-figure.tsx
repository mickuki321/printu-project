import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {RawRectangle} from './raw-rectangle';
import {RawEllipse} from './raw-ellipse';
import {Box} from '@chakra-ui/react';

type Props = {
	item: ProjectItemInterface;
};

export const GeometricFigure = ({item}: Props) => {
	if (item.type === 'rectangle') {
		return <RawRectangle item={item}/>;
	}

	if (item.type === 'ellipse') {
		return <RawEllipse item={item}/>;
	}

	return <Box>error</Box>;
};
