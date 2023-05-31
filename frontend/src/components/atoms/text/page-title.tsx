import {Heading} from '@chakra-ui/react';

interface Props {
	children: string;
}
export const PageTitle = ({children}: Props) => <Heading as='h1' size='xl' ml={6} fontSize={28} color={'gray.700'}>
	{children}
</Heading>;
