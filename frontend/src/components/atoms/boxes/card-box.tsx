import {Box, type BoxProps} from '@chakra-ui/react';

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
	isHovered: boolean;
};

export const CardBox = ({children, isHovered, ...arg}: Props & BoxProps) => (
	<Box w='400px' border='1px solid' borderColor={isHovered ? 'red' : 'blackAlpha.500'} borderRadius={4} p={6}
		m={6} {...arg}>
		{children}
	</Box>
);
