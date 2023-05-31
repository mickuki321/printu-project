import {Home} from './components/views/home';
import {Header} from './components/organisms';

const App = (): JSX.Element => (
	<div className='App'>
		<Header>
			<Home/>
		</Header>
	</div>
);

export default App;
