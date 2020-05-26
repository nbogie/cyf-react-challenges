# Challenge: "Frontend Mentor's REST Countries API with color theme switcher (React)"

This excellent challenge lives at [frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

In this document we will simply break down that challenge into approachable levels, and give extra tips for getting started.

## Challenge Overview

Your challenge is to make a React app integrate with the REST Countries API to fetch country data and display it like in the designs provided by frontendmentor.io.

However, in the earlier levels you will be given a file containing with the downloaded countries data, so that you do not have to fetch it from the API.

## Pre-requisites - what do I need to know to finish this challenge?

Level 1 - React week 1:

- React `props`
- The `array.map` method and its use in React JSX

Later levels - React week 2:

- Event handlers: `onClick` for buttons
- Event handlers: `onChange` for input fields and `select` elements
- The `useState` hook

## Getting Started

* **Don't** clone this repo.
* Make your own React app using `create-react-app`.  See [(this guide)](https://docs.codeyourfuture.io/students/guides/creating-a-react-app) if you have forgotten how.
* Read Level 1 below, but don't start
* Carefully read the brief in the frontend mentor challenge.
* Sign in to frontendmentor.io and download and expand the starter pack
* Read the instructions and guidance in that pack.
* Read Level 1 below, again!
* Copy the [./countriesAll.json](./countriesAll.json) data file into your `src/` directory, and then import it into your React app.
* Put your project on GitHub
* Host it on Netlify (see below for naming)
* Write a plain HTML prototype (e.g. on codepen) with some copy-pasted country "cards".  THEN, once you are confident about the HTML you need to create...
* Start to code the React app!

### The data:

* The data you will need is available in the file [./countriesAll.json](./countriesAll.json).  This is a list of all countries, obtained from `https://restcountries.eu/rest/v2/all`
* Read "Getting Started" for what to do with this file.
* In *later* levels you will make your app fetch the data directly from the API as described in the frontendmentor challenge.

## GitHub & Hosting:

Add your project in github and host it on Netlify.


| site:         | correct name                                    |
| ------------- | ----------------------------------------------- |
| GitHub repo   | `countries-react`                               |
| Netlify site  | `cyf-YOURGITHUBUSERNAME-countries-react`        |



# Level 1 Challenge

* Write a react app to present the list of countries as shown in the frontend mentor challenge.
* Get as close as possible to the presentation.
* Ignore the search box
* Ignore the region select
* Ignore the colour theme selector
* Ignore the requirement to allow clicking to see one specific country.
* Your project should be on GitHub and Netlify with correct names (see Hosting, above).

### Example Screenshot

![Level 1 Example Screenshot](./example-screenshots/level-1.png)

# Level 2 challenge

* Add the search box
* When the search box has text in it, your app should update the displayed list of countries to only show matches
  * Accept matches of the string in the country name AND matches in the capital
* Matches should be case-insensitive.
* When the search bar is clear, all countries should be shown.

### Example Screenshot

![Level 2 Example Screenshot](./example-screenshots/level-2.png)

# Level 3 challenge

* Add the "region select" menu
* When this is changed, only show the countries which:
    * have the chosen region, AND
    * match the search box term (if there is one)
* When a region is not selected (i.e. the menu is set to "Filter by region") then countries should NOT be filtered by region and only the search rules should apply.

### Example Screenshot

![Level 3 Example Screenshot](./example-screenshots/level-3.png)

# Level 4 challenge

* Allow users to click on a country and view that country's full details, as shown in the frontendmentor challenge.
* Make sure to allow clicking on bordering countries to visit these neighbours
* Don't forget the "back" button

### Example Screenshot
![Level 4 Example Screenshot](./example-screenshots/level-4.png)

# Level 5 challenge
* Implement the colour scheme picker

# Beyond - ideas for more work

- easy: Add a "random country" button
- Advanced: Make a quiz where a country card is shown and 5 random capitals - the user must correctly guess the correct capital.
    - use a separate component to develop this without affecting your main app
- Advanced: Make a game where two countries are named and the user tries to navigate from one country to another via their bordering countries in the fewest possible steps.    
- record "favourite" countries
   - Find a way to persist these even after the browser tab is closed
- See the existing [CYF Group project: Countries](https://github.com/CodeYourFuture/group-project-countries) for more ideas


# Credits

This is a presentation (and further structuring) of a free challenge made available [here](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) by [Frontend Mentor](https://www.frontendmentor.io/).  Code Your Future are grateful for that excellent resource!
