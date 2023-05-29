import {Home} from 'src/components/views/home';

const App = (): JSX.Element => (
	<div className='App'>
		<header className='App-header'>
			<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
                test
				<Home/>
			</a>
		</header>
	</div>
);

export default App;
