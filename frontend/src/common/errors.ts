import {type ToastProps} from '@chakra-ui/react';
import {type AxiosError} from 'axios';

export const TOAST_ERROR_CONFIG: ToastProps = {
	title: 'Error',
	description: 'We\'ve created your account for you.',
	status: 'error',
	position: 'top-right',
	duration: 9000,
	isClosable: true,
};
export const toastError = (toast: ToastType, error: AxiosError<{message?: string}>) => {
	toast({...TOAST_ERROR_CONFIG, description: error.response?.data?.message ?? error.message});
};

export type ToastType = (toast: ToastProps) => void;
