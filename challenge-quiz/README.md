# Challenge: Trivia Quiz

![example](https://i.ibb.co/Byyss7c/Screenshot-2020-07-02-at-20-00-51.png)

## Introduction

Welcome to the React Quiz challenge! This is what we need to build:

### [>>> Click here for Game Demo <<<](https://csb-qmydz-9dm8xvx98.vercel.app/)

You will require a strong understanding of React+Hooks to complete this challenge.

## The rules

Every player has 3 lives: The logic and rules are simple. When the player loads the app:

1. We fetch a question and display it.
2. The player guesses the answer.
3. If the player is right, they get a point 🥇. If wrong, they lose a life 🖤.
4. We fetch a new question and repeat.

When the player makes a wrong guess and has no remaining lives, it's game over and the player will be shown their final score. (My best score is 9).

## Challenge

1. Easy part: Recreate the game demo above.

If you are looking to work out how to approach the problem, do this without checking the "Steps" section below. If you're more trying to practice React implementation than design, feel free to read the Steps section for guidance.

2. Hard part: The goal here is not to add features, the goal is to write the code for the game above in the **cleanest way possible**. That means:

- [ ] No errors or warnings in the console
- [ ] Variable/function/component names must make sense and be properly spelled
- [ ] No unused or commented-out code
- [ ] A code structure that you understand and can clearly explain.

Once the demo is working you are only **half finished**, you must go back and refactor the code to remove anything unnecessary and fix anything confusing.

Completing the challenge is not enough, this should be the cleanest code you have ever written.

## Things that will help

### The API

```js
const api = `https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986`;
```

Fetch data from here 👆👆👆. This is the Open Trivia Database, they have thousands of questions. The documentation for this api is [here](https://opentdb.com/api_config.php). Fetching from the url above will return one single question (inside an array).

### Encoding

When you fetch from the api, you will notice that all strings returned all look like this:

```
## A%20slug%E2%80%99s%20blood%20is%20green.
```

What's going on here? This is a _[url encoded string](https://en.wikipedia.org/wiki/Percent-encoding)_. We don't want to display our strings like that to our players. Javascript has a way to convert a string like this to a normal string, using the function below. You might find this useful.

```js
const decoded = decodeURIComponent("A%20slug%E2%80%99s%20blood%20is%20green");
console.log(decoded);
// A slug's blood is green
```

### Shuffle

You may need to shuffle an array at some point (the game must show the possible answers in a random order). There are many ways to do a random shuffle, here is one:

```js
const unshuffled = [1, 2, 3];
const shuffled = unshuffled.sort(() => Math.random() - 0.5);
console.log(shuffled);
// [2, 1, 3]
```

### React Guidelines

You do not necessarily need to use useEffect to complete this challenge but it may be cleaner to do so.

You do not need to use multiple components to complete this challenge but it may be cleaner to do so.

### Styling & CSS

This challenge is all about clean code so there are no extra points for styling. (If you decide to include syling anyway, your CSS must be every bit as beautiful and clean as your javascript code!).

## Advanced challenge

When this was sent to the top-secret Code Your Future QA team for testing they noticed a serious bug. I will include their report below.

```
From: Quality Assurance Team
Subject: Quiz demo bug CRITICAL!!

We have noticed that if a player clicks a correct answer
two times VERY QUICKLY they can get an extra point.

We have noticed some players using this to cheat, this
bug must be fixed urgently!! CHEATING IS NOT ACCEPTABLE!
```

If you can fix the bug they will very pleased. Good luck.

## Steps

Ignore this section if you'd like to work out the steps yourself, these are just a suggestion to help out if you need.

1. Get a single question working, without fetch. We've provided one example question in the question.json file, which you can import. It has the same structure as the API returns. Your app should tell the user "You got the answer right" or "You got the answer wrong".
2. Implement the "lives" logic. If they get the question wrong, they lose a life. Show them how many lives they have left. Instead of telling the user right/wrong, tell them "You got the answer right" or "You got the answer wrong, you have (number) lives remaining: try again", or "You ran out of lives".
3. Switch your implementation to fetch questions using the API, rather than from the JSON file.
4. Implement the "score" logic. Count how many questions they got right, and show them, both as they play, and when they die.
5. Make sure your code is perfect!
