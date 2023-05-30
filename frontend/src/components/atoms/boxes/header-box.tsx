import {Flex, type BoxProps} from '@chakra-ui/react';

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
};

export const HeaderBox = ({children, ...arg}: Props & BoxProps) => (
	<Flex h='70px' position='absolute' top={0} left={0} width='100%' borderBottom='1px solid'
		borderColor={'gray.500'} boxShadow='xl' {...arg} >
		{children}
	</Flex>
);
