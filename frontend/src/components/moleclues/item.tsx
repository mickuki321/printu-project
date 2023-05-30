import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {Contour, LabelFigure, Point} from '../atoms';
import {GeometricFigure} from 'src/components/atoms/svg-components/geometric-figure';

type Props = {
	item: ProjectItemInterface;
	isHovered: boolean;
	mouseMouseOut: () => void;
	mouseOverItem: () => void;
};
export const Item = ({item, isHovered, mouseOverItem}: Props) => (
	<g onMouseOver={mouseOverItem} id={isHovered ? 'one' : undefined}>
		<GeometricFigure item={item}/>
		<Point item={item}/>
		<LabelFigure item={item}/>
		<Contour item={item}/>
	</g>

);
