export const theme = {
	colors: {
		white: 'white',
		shadow: 'rgba(0,0,0,0.24)',
		text: '#333',
		glow: {
			Vegeta: '#496BAB',
			Naruto: 'rgb(224, 99, 44)',
			Midoriya: 'rgb(53, 100, 74)'
		}
	},
	padding: '2rem'
};

export interface ThemeInterface {
	colors: Colors;
	padding: string;
}

export interface Colors {
	white: string;
	shadow: string;
	text: string;
	glow: Glow;
}

export interface Glow {
	[character: string]: string;
}
