import {type BoxProps, Center} from '@chakra-ui/react';

interface Props {
	children: JSX.Element | JSX.Element[] | string | string[];
}

export const HeaderBox = ({children, ...arg}: Props & BoxProps) => (
	<Center h='70px' position='absolute' top={0} left={0} width='100%' borderBottom='1px solid'
		justifyContent='flex-start'
		borderColor={'gray.200'} boxShadow='md' {...arg} >
		{children}
	</Center>
);
