import {Center, Spinner} from '@chakra-ui/react';

export const SpinnerScreen = () => (
	<Center position='absolute' w='100vw' h='100vh' top={0} left={0} zIndex={999} bgColor='#ddddddaa'>
		<Spinner size='xl' height='100px' width='100px' thickness='4px' color='blue.500'/>
	</Center>
);
