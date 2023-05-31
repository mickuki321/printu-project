import {HeaderBox, PageTitle} from 'src/components/atoms';
import {Box} from '@chakra-ui/react';

interface Props {
	children: JSX.Element;
}

export const Header = ({children}: Props) => (
	<Box pt={'70px'} maxH={'100vh'}>
		<HeaderBox>
			<PageTitle>
                Printu-Project
			</PageTitle>
		</HeaderBox>
		{children}
	</Box>
);
