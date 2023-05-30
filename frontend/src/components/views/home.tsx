import {useState} from 'react';

import {getProject, getProjectInit} from '../../api/project';
import {type ProjectInterface} from '../../interfaces/project.interface';
import {HomeTemplate} from 'src/components/templates/home-template';
import {SpinnerScreen} from 'src/components/organisms/spinner-screen';

export const Home = () => {
	const [projectData, setProjectData] = useState<ProjectInterface>();
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const init = async () => {
		setIsLoading(true);
		const id = await getProjectId();
		if (!id) {
			return;
		}

		const response = await getProject({id});
		if (response) {
			setProjectData(response);
		}

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
			<HomeTemplate projectData={projectData} searchValue={searchValue} handlerSearch={handlerSearch}
				setSearchValue={setSearchValue}/>
			{isLoading && <SpinnerScreen/>}
		</>
	);
};
