import {Flex, Text} from '@chakra-ui/react';

interface Props {
	label: string;
	value: string | number;
}

export const Record = ({label, value}: Props) => (
	<Flex justifyContent='flex-start' w='100%'>
		<Text w='200px' fontWeight={700} m={0} mr={6}>{label}</Text> <Text m={0} w='100%'
			wordBreak='break-word'>{value}</Text>
	</Flex>
);
