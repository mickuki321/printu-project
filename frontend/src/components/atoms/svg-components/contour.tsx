import {type ProjectItemInterface} from 'src/interfaces/project.interface';

interface Props {
	item: ProjectItemInterface;
}

const degreesToRadians = (degrees: number) => {
	const pi = Math.PI;
	return degrees * (pi / 180);
};

const calculateRelativeSideLength = (width: number, height: number, rotation: number) =>
	(height * Math.sin(degreesToRadians(rotation % 90)))
    + (width * Math.cos(degreesToRadians(rotation % 90)));

const calculateRelativeDimensions = (width: number, height: number, rotation: number) => {
	const firstLength = calculateRelativeSideLength(height, width, rotation);
	const secondLength = calculateRelativeSideLength(width, height, rotation);
	const isRotated = Math.floor(rotation / 90) / 2 === 1;
	return ({
		width: isRotated ? secondLength : firstLength,
		height: isRotated ? firstLength : secondLength,
	});
};

export const Contour = ({item}: Props) => {
	const {width, height} = calculateRelativeDimensions(item.width, item.height, item.rotation);

	return (
		<rect
			fill='none'
			strokeWidth='2'
			strokeOpacity='0.4'
			stroke='#ffffff'
			width={width}
			height={height}
			transform={`translate(${item.x - (width / 2)}, ${item.y - (height / 2)})`}
		/>
	);
};
