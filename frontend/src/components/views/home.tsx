import {useState} from 'react';

import {getProject, getProjectInit} from '../../api/project';
import {type ProjectInterface} from '../../interfaces/project.interface';
import {HomeTemplate} from 'src/components/templates/home-template';

export const Home = () => {
	const [projectData, setProjectData] = useState<ProjectInterface>();
	const [searchValue, setSearchValue] = useState<string>('');

	const init = async () => {
		const id = await getProjectId();
		if (!id) {
			return;
		}

		const response = await getProject({id});
		if (response) {
			setProjectData(response);
		}
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
		<HomeTemplate projectData={projectData} searchValue={searchValue} handlerSearch={handlerSearch}
			setSearchValue={setSearchValue}/>
	);
};
