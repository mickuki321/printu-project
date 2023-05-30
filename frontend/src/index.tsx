import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import {ChakraProvider, extendBaseTheme} from '@chakra-ui/react';

const root = createRoot(document.getElementById('root')!);

const theme = extendBaseTheme({
	fonts: {
		heading: '"Lato", sans-serif',
		body: '"Lato", sans-serif',
	},
});

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App/>
		</ChakraProvider>
	</StrictMode>,
);
