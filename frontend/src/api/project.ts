import axios from 'axios';

import {API_PRINTU, API_PROJECT} from 'src/constans/api-paths';
import {type ProjectInterfaceInterface} from 'src/interfaces/project.interface';

export const getProject = async ({
	id,
}: {id: string}) => {
	try {
		const response = await axios.get(
			`${API_PRINTU}${API_PROJECT}${id}`,
		);
		return response.data as ProjectInterfaceInterface;
	} catch (error) {
		return false;
		// CatchError({error, toast, navigate, errorCallback});
	}
};
