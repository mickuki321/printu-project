import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getProjectInit} from '../../api/project';
import {HomeTemplate} from '../templates';
import {SpinnerScreen} from '../organisms';
import {type StateInterface} from 'src/redux/features/project-reducer';
import {type ProjectInterface} from 'src/interfaces/project.interface';

export const Home = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const projectData = useSelector<{
		project: StateInterface;
	}>(state => state.project.value);
	const dispatch = useDispatch();
	console.log(projectData);
	const init = async () => {
		setIsLoading(true);
		const id = await getProjectId();
		if (!id) {
			return;
		}

		dispatch({type: 'PROJECT_FETCH_REQUESTED', payload: id});

		setIsLoading(false);
	};

	const handlerSearch = () => {
		init();
	};

	const getProjectId = async () => {
		if (searchValue) {
			return searchValue;
		}

		const responseInit = await getProjectInit();
		if (!responseInit) {
			return false;
		}

		return responseInit.id;
	};

	return (
		<>
			<HomeTemplate projectData={projectData as ProjectInterface | undefined} searchValue={searchValue}
				handlerSearch={handlerSearch}
				setSearchValue={setSearchValue}/>
			{isLoading && <SpinnerScreen/>}
		</>
	);
};
