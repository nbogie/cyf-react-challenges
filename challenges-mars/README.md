# Challenge: Who's on Mars?

## Overview

NASA has sent three rovers to Mars: Spirit, Opportunity, and Curiosity. These rovers move around Mars taking pictures (among other things).

Unfortunately, rovers eventually stop sending back pictures. Some of the rovers stopped sending back pictures already.😥

## Difficulty Level

This is a advanced challenge. Level one can be completed by any student who has done week 3 of the CYF React module.

## API

[This page gives details about NASA’s APIs](https://api.nasa.gov/). You should be ok to use DEMO_KEY as your API key for experimenting, but you may need to register for your own API key. Make sure not to check your API key into git.

You should use the `Mars Rover Photos` API to get data.

Make sure you read the website carefully before starting.

You can use this API to get a list of the Rovers:

e.g. https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY

You can then use this api to get information about the rover

e.g. https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=DEMO_KEY

You can then use this API to get photos from that rover:

e.g. https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

_Note: Earth dates and Mars dates (“sols”) are slightly different. For the UI of this website, we always want to use Earth dates._

## Getting Started

**Don't** clone this repo.

Make your own React app using `create-react-app`. See [(this guide)](https://docs.codeyourfuture.io/students/guides/creating-a-react-app) if you have forgotten how.

Write a plain HTML prototype (e.g. on codepen). THEN, once you know the HTML you're attempting to create, work on the React version! This is not mandatory but it is recommended.

## Levels

### Level 100

Your goal is to make a website which is a bit like a timeline or calendar.

Create an overview page.

Show when each of the rovers arrived on Mars, and make it clear when they overlapped.

Use some nice visualisation to show this overlap.

### Level 200

Improve your Overview page by also showing when each rover stopped sending back pictures.

For any date I want, I should easily be able to tell “How many rovers were sending back pictures this day?”

### Level 300

Per-date page - if the user clicks on a date on your overview page, you should show one picture of Mars taken by each rover which took a picture on that day. You should decide which camera tends to take the best “overview” photo.

### Level 400

Per-date per-rover page - if the user clicks on the rover name from the per-date page, you should show all pictures (but not more than 25) taken by that rover on that day.

### Level 500

Improve your per-date per-rover page to show up to 100 pictures.
