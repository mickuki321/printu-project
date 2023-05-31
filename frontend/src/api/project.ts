import axios, {type AxiosError, type AxiosResponse} from 'axios';
import {API_INIT, API_PRINTU, API_PROJECT} from 'src/constans/api-paths';
import {type ProjectInitInterface, type ProjectInterface} from 'src/interfaces/project.interface';
import {TOAST_ERROR_CONFIG, toastError, type ToastType} from 'src/common/errors';
import {isProjectInterface} from 'src/common/project-narrowing';

export const getProject = async ({
	id, toast,
}: {id: string; toast: ToastType}) => axios.get(
	`${API_PRINTU}${API_PROJECT}/${id}`,
)
	.then((response: AxiosResponse<ProjectInterface>) => {
		if (!isProjectInterface(response.data)) {
			toast({...TOAST_ERROR_CONFIG, description: 'The project contains incorrect data'});
			return false;
		}

		return response.data;
	})
	.catch((e: AxiosError<{message?: string}>) => {
		toastError(toast, e);
		return false;
	});

export const getProjectInit = async (toast: ToastType): Promise<ProjectInitInterface | false> => axios.get(
	`${API_PRINTU}${API_INIT}`,
)
	.then((response: AxiosResponse<ProjectInitInterface>) => response.data)
	.catch((e: AxiosError<{message?: string}>) => {
		toastError(toast, e);
		return false;
	});
