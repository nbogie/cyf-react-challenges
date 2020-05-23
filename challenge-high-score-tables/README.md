# Challenge: "High Score Tables (React)"

## Challenge Overview

Make a React app which lists some high score tables. The scores data is provided for you.

## Difficulty Level

This is a beginner challenge.

## Pre-reqs

- react `props`
- `array.map` method as used in React JSX

### Example Screenshot

Level 1 challenge screenshot example.

![Example Screenshot](./example-screenshots/react-high-score-tables-example-layout.png)

# Level 1 Challenge

Write a react app which displays high score tables.

Each country should have its own High Score table displayed.

### Getting Started

Don't clone this repo.

Make your own React app using create-react-app.

Copy across the score file (or the score file's contents) to your app, and then import from that file.

### Components:

For this challenge you should make AT LEAST:

- HighScoreTable - a table with a country name and a list of scores
- PlayerScore - component responsible for displaying one player's score (e.g. as one line of the table) (e.g. `Neill 5000`)

(In the real world you could choose what components to make)

### The data:

The data is available in the file [./scores.js](./scores.js).  
You can copy this array of data into your App.js or you can import it.

# Bonus:

- Present the High Score Tables sorted alphabetically by country name
- Within one table, sort the player score lines by score, numerically, descending. (This is NOT pictured in the example)
- add some old-skool videogame icons or animations
- add a _single_ button which toggles the sort order of every scores table between ascending and descending by scores.

## Hosting:

Add your project in github and host it on Netlify.

The github repo name should be:
`high-scores-react`

The netlify site suffix should be `-scores`

so...

`cyf-YOURGITHUBUSERNAME-scores`

## Further resources
