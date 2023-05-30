import {HeaderBox} from 'src/components/atoms';
import {Box} from '@chakra-ui/react';

type Props = {
	children: JSX.Element;
};

export const Header = ({children}: Props) => (
	<Box pt={'70px'}>
		<HeaderBox>
            Printu-Project
		</HeaderBox>
		{children}
	</Box>
);
