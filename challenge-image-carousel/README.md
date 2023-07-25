# Challenge: "Image Carousel" (React)

## Challenge Overview

Make a React app which allows the user to navigate a set of images (first manually, then with an auto-playing slideshow).

### Try a live demo:

[Try this live demo!](https://cyf-image-carousel.netlify.com/)

### Example Screenshot

Level 1 challenge screenshot example.

![Example Screenshot](./example-screenshots/example-level1.png)

## Difficulty Level

* Level 1 is an intermediate challenge.  
* Level 2's auto-play functionality is advanced if you have learned React hooks.

# Level 1 Challenge

Make forward and back buttons to move _manually_ in that direction through a list of at least 4 images. 

(e.g. When the user presses forward once, the display should move ONCE to the next image.)

You can use any images.  

You can store the images within your app or you can use links to images hosted elsewhere ("hotlinking").

[Unsplash](https://unsplash.com/) is a good source of images for this challenge.

# Level 2 Challenge

Make auto-forward and auto-back buttons to _automatically_ move in that direction through the list of images.

Here's a screenshot example from a completed level 2 challenge.

Warning: This quite hard to do using React Hooks. See [here](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) for an explantion!

![Example Screenshot](./example-screenshots/example-level2.png)

# Try to finish the rest by yourself

If you want a harder challenge, don't read the rest of this document but instead try to build the app by yourself.

If you want hints, then you will find some below.

# Suggested approach

Here's one approach you might take to building this app.

## Task: Create a new React app

Create a new empty React app for this challenge.

The tool can take a while to run, so continue with the next task while it's running...

## Task: Design your layout _on paper_

Design your layout on paper. Keep it very simple - this is a React challenge, not a CSS challenge.

Use a layout that will be ok on a phone (but _don't_ spend time on responsive design).

Keep this drawing around for reference later.

## Task: Convert your layout to HTML

Convert the drawing to HTML (on codepen or elsewhere) and check the buttons appear correctly.

_DON'T_ add any CSS or extra markup to make it look good just now. That will only make it more difficult for you to think about your app during development.

## Task: Convert your HTML to JSX within your React app

Now make components which will generate the planned HTML from the previous task.

## Task: Make the buttons work

Make your buttons work to navigate forwards and backwards, manually.

## Task: Host your app

Host your app and prove it works by viewing it on your phone!

We recommend you use Netlify. [Instructions are here](https://gist.github.com/nbogie/bf58a391fab6884f77a6adec66047181).

(You can instead use Heroku to host, or github pages, or codesandbox.io, or glitch.com...)

## Task: more buttons - automated slideshow

Add the following buttons:

- auto-forward
- stop
- auto-backwards

These should allow automatic navigation through the images, say every 5 seconds.

## Task: host again.

Host again.

## Create a repo on github for your code
* Create a new repo on github
* Add this github repo as a remote for your existing local image-carousel repo.

*STOP!*  You CANNOT simply copy-paste and run this command!  You'll have to change the user and repo in the following to match your own.

```git remote add origin https://github.com/user/repo.git```

```git push -u origin master```

## End of basic challenge!

Congratulations, you've finished the basics!

- Send the URL of your hosted app to your team on Slack.
- Make sure you can access it and play with it on a smartphone!
- Celebrate!

## Optional: Add UI for delay time

Add UI so that the user can specify how long to wait between images.

## Advanced Challenge: make it look good

- Now is a good time to make it look good with CSS, colour, typography, images, and creativity. Maybe you could ask someone to collaborate with you on those aspects.

## Further resources
