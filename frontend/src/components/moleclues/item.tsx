import {type ProjectItemInterface} from 'src/interfaces/project.interface';
import {Contour, LabelFigure, Point, RawEllipse, RawRectangle} from '../atoms';

type Props = {
	item: ProjectItemInterface;
};

export const Item = ({item}: Props) => (
	<g>
		{item.type === 'ellipse' ? <RawEllipse item={item}/> : <RawRectangle item={item}/>}
		<Point item={item}/>
		<LabelFigure item={item}/>
		<Contour item={item}/>
	</g>

);
