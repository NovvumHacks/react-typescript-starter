# react-typescript-starter
Typescript Starter with styled-components! 🎊🎉

## Introduction

A simple typescript starter for react using styled-components

## Theming with styled-components

__under src/styled/theme.ts__

```ts
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

```

## Getting Started

> clone the repo

```sh
git clone https://github.com/NovvumHacks/react-typescript-starter.git

```
<br/>

> install the dependencies

```sh

yarn

# --- or ----

npm install

```
<br/>

> start hacking!

```sh
yarn start

# --- or ----

npm run start
```

