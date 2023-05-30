import {Flex, type BoxProps} from '@chakra-ui/react';

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
	isHovered: boolean;
};

export const CardBox = ({children, isHovered, ...arg}: Props & BoxProps) => (
	<Flex w='400px' border='1px solid' borderColor={isHovered ? 'red' : 'gray.300'} boxShadow='sm'
		borderRadius={4}
		cursor={isHovered ? 'pointer' : undefined}
		m={4} {...arg}>
		{children}
	</Flex>
);
