import {Text} from '@chakra-ui/react';

type Props = {
	children: string;
};
export const Title = ({children}: Props) => <Text w='100%' fontSize={24} color={'gray.700'} pb={4}>
	{children}
</Text>;
