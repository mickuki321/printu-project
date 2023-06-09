import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useToast} from '@chakra-ui/react';

import {getProjectInit} from 'src/api/project';
import {HomeTemplate} from '../templates';
import {SpinnerScreen} from '../organisms';
import {useSelector} from 'src/redux/store';

export const Home = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const projectData = useSelector(state => state.project.value);
	const dispatch = useDispatch();
	const toast = useToast();

	const init = async () => {
		setIsLoading(true);
		const id = await getProjectId();
		if (!id) {
			return;
		}

		dispatch({type: 'PROJECT_FETCH_REQUESTED', payload: {id, toast}});

		setIsLoading(false);
	};

	const handlerSearch = () => {
		init();
	};

	const getProjectId = async () => {
		if (searchValue) {
			return searchValue;
		}

		const responseInit = await getProjectInit(toast);
		if (!responseInit) {
			return false;
		}

		return responseInit.id;
	};

	return (
		<>
			<HomeTemplate projectData={projectData} searchValue={searchValue}
				handlerSearch={handlerSearch}
				setSearchValue={setSearchValue}/>
			{isLoading && <SpinnerScreen/>}
		</>
	);
};
