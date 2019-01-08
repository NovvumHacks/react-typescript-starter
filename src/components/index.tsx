import * as React from 'react';
import { styled } from '../styled';

const Card = styled('div')<{ image: string; name: string }>`
	min-width: 350px;
	flex: 1;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 2rem;
	box-shadow: 0 0 3rem 1rem
		${(p) => (p.name ? p.theme.colors.glow[p.name] : p.theme.colors.shadow)};
	.image {
		background-image: ${(p) => `url("${p.image}")`};
		height: 150px;
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.content {
		padding: ${(p) => p.theme.padding};
	}
	h1 {
		font-weight: bold;
		font-size: 1.5rem;
		border-bottom: 1px solid ${(p) => p.theme.colors.shadow};
		padding: 1rem 0px 1rem 0px;
		text-align: center;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	color: ${(p) => p.theme.colors.text};
`;

export interface IProps {
	name: string;

	image: string;
	shows: string[];
	moves: string[];
}

export class CharacterCard extends React.Component<IProps, {}> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		const { name, shows, moves, image } = this.props;
		return (
			<Card image={image} name={name}>
				<div className="image" />
				<h1>{name}</h1>
				<div className="content">
					<br />
					<strong>Shows</strong>
					<ul>
						{shows.map((show) => (
							<li key={show}>{show}</li>
						))}
					</ul>
					<br />
					<strong>Moves</strong>
					<ul>
						{moves.map((move) => (
							<li key={move}>{move}</li>
						))}
					</ul>
				</div>
			</Card>
		);
	}
}
