import {Flex, Text} from '@chakra-ui/react';

type Props = {
	label: string;
	value: string | number;
};

export const Record = ({label, value}: Props) => (
	<Flex>
		<Text w='100px' fontWeight={700} m={0}>{label}</Text> <Text m={0}>{value}</Text>
	</Flex>
);
