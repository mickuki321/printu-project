import {Input, Button} from '@chakra-ui/react';
import {CardBox} from 'src/components/atoms';
import {type Dispatch, type ChangeEvent} from 'react';

type Props = {
	searchValue: string;
	setSearchValue: Dispatch<string>;
	handlerSearch: () => void;
};
export const SearchBox = ({searchValue, handlerSearch, setSearchValue}: Props) => {
	const handlerSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<CardBox justifyItems='center' alignItems='center' p={4} flexDirection='column' mb={0}>
			<Input w='100%' placeholder='Enter your project id' variant='outline' size='lg' value={searchValue}
				onChange={handlerSearchInput}/>
			<Button w='100%' mt={4} colorScheme='teal' size='lg' onClick={handlerSearch}>Search</Button>
		</CardBox>
	);
};

