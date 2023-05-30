import {Home} from 'src/components/views/home';
import {Header} from 'src/components/organisms/header';

const App = (): JSX.Element => (
	<div className='App'>
		<Header>
			<Home/>
		</Header>
	</div>
);

export default App;
