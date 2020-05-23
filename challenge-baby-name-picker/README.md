# Challenge: "Baby Name Picker (React)"

## Challenge Overview

Make a React app which shows some baby names and lets you pick your favourites. The names data is provided for you.

## Difficulty Level

This is a beginner challenge, suitable from students who have completed at least week 2 of the CYF React module.

(Level one can be completed by any student who has started the React module.)

## Pre-reqs

- React `props`
- The `array.map` method as used in React JSX
- Event handlers: onClick for buttons
- Event handlers: onChange for input fields
- The `useState` hook

## Getting Started

Don't clone this repo.

Make your own React app using create-react-app.

### The data:

The data is available in the file [./babyNamesData.json](./babyNamesData.json).

Copy across this file to your src/ directory, and then import it.

## Hosting:

Add your project in github and host it on Netlify.

The github repo name should be exactly:
`baby-names-react`

The netlify site suffix should be `-baby-names`

so...

`cyf-YOURGITHUBUSERNAME-baby-names`

# Level 1 Challenge

Write a react app which lists baby names from the given file.

It should display boys' and girls' names differently.

The names should be displayed in alphabetical order, ascending.

### Example Screenshot

Level 1 challenge screenshot example.

![Level 1 Example Screenshot]("./example-screenshots/level-1-list.png")

# Level 2 challenge

Add a search bar.

When someone types into it, your app should update the displayed list of baby names to only show matches.

Matches should be case-insensitive.

When the search bar is clear, all names should be shown.

### Example Screenshot

Level 2 Example Screenshot

![Level 2 Example Screenshot]("./example-screenshots/level-2.png")

# Level 3 challenge

Add "favourites".

When the user clicks a name from the main list, it should be moved to a "favourites" list, displayed separately.

When the user clicks a name from the _favourites_ list, it should be moved back to the main list.

### Example Screenshot

Level 3 Example Screenshot

![Level 3 Example Screenshot]("./example-screenshots/level-3.png")

# Level 4 challenge

Add "name gender" filter buttons.

Add buttons that allow the user to only see boy or girl names (or all names).

The buttons should operate as "radio" buttons - exactly one should be active at any time.

The app should start by showing all names.

The app should make it clear which filter is in effect.

If there is a search term in effect, your app should apply this name gender filter to the search results.

### Example Screenshot

Level 4 Example Screenshot

![Level 4 Example Screenshot]("./example-screenshots/level-4.png")

## Further resources

# Credits

This application idea, including the look, was taken from [Simon Vrachliotis'](https://simonswiss.com/) app.
