import axios from 'axios';

import {API_INIT, API_PRINTU, API_PROJECT} from 'src/constans/api-paths';
import {type ProjectInitInterface, type ProjectInterface} from 'src/interfaces/project.interface';

export const getProject = async ({
	id,
}: {id: string}) => {
	try {
		const response = await axios.get(
			`${API_PRINTU}${API_PROJECT}/${id}`,
		);
		return response.data as ProjectInterface;
	} catch (error) {
		return false;
		// CatchError({error, toast, navigate, errorCallback});
	}
};

export const getProjectInit = async () => {
	try {
		const response = await axios.get(
			`${API_PRINTU}${API_INIT}`,
		);
		return response.data as ProjectInitInterface;
	} catch (error) {
		return false;
		// CatchError({error, toast, navigate, errorCallback});
	}
};
