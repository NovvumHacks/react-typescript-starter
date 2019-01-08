import * as React from 'react';
import { render } from 'react-dom';
import data from './dataset/data';
import { CharacterCard, Container, IProps } from './components';
import { ThemeProvider, theme } from './styled';
import './styles.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Container>
					{data.anime.characters.map((character: IProps) => (
						<CharacterCard
							name={character.name}
							image={character.image}
							shows={character.shows}
							moves={character.moves}
						/>
					))}
				</Container>
			</div>
		</ThemeProvider>
	);
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
