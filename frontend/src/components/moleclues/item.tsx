import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {Contour, LabelFigure, Point, GeometricFigure} from '../atoms';

interface Props {
	item: ProjectItemInterface;
	isHovered: boolean;
	mouseMouseOut: () => void;
	mouseOverItem: () => void;
}
export const Item = ({item, isHovered, mouseOverItem}: Props) => (
	<g onMouseOver={mouseOverItem} id={isHovered ? 'one' : undefined}>
		<GeometricFigure item={item}/>
		<Point item={item}/>
		<LabelFigure item={item}/>
		<Contour item={item}/>
	</g>

);
