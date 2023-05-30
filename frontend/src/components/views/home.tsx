import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getProjectInit} from '../../api/project';
import {HomeTemplate} from '../templates';
import {SpinnerScreen} from '../organisms';
import {fetchProject} from 'src/redux/features/project-reducer';

export const Home = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const projectData = useSelector(state => state);
	const dispatch = useDispatch();
	console.log(projectData);
	const init = async () => {
		setIsLoading(true);
		const id = await getProjectId();
		if (!id) {
			return;
		}

		dispatch(fetchProject(id));

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
			<HomeTemplate projectData={undefined} searchValue={searchValue}
				handlerSearch={handlerSearch}
				setSearchValue={setSearchValue}/>
			{isLoading && <SpinnerScreen/>}
		</>
	);
};
