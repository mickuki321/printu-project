import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ChakraProvider, extendBaseTheme, theme as defaultTheme} from '@chakra-ui/react';
import {Provider} from 'react-redux';

import App from './App';
import store from './redux/store';

const root = createRoot(document.getElementById('root')!);

const theme = extendBaseTheme({
	...defaultTheme,
	fonts: {
		heading: '"Lato", sans-serif',
		body: '"Lato", sans-serif',
	},
});

root.render(
	<StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App/>
			</ChakraProvider>
		</Provider>
	</StrictMode>,
);
