import {Input, Button} from '@chakra-ui/react';
import {CardBox} from 'src/components/atoms';

export const SearchBox = () =>
	<CardBox justifyItems='center' alignItems='center' p={4} flexDirection='column' mb={0}>
		<Input w='100%' placeholder='Enter your project id' variant='outline' size='lg'/>
		<Button w='100%' mt={4} colorScheme='teal' size='lg'>Search</Button>
	</CardBox>;
