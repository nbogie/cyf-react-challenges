# incremental steps for pre-react version of this challenge

**pre-coding - looking at the data**
* looking at one episode of the JSON, 
* identifying and extracting key elements of the data:  episode name, img url, summary.  "What properties will you need from each episode?"  What are their names?  Are they nested within other properties?

**pure JS coding**
* extracting key elements of the data from ONE episode JSON (episode name, summary, img url, etc)
  * presenting in plain text on the (node) console
* coding necessary manipulations of those key elements, presenting to console
  * e.g. truncating summary to 100 chars
  * e.g. making a fixed-width episode tag like `S01E03` from `{..., seasonNumber: 1, episode: 3 }`
  * e.g. optional: clean-up of p tags in summary.
  * (if teaching testing: writing tests for these examples)
* (optional) code some manipulations of the JSON: [Here are some in this repl: TVEpisodesStart](https://repl.it/@NeillBogie/TVEpisodesStart)
  * getNamesOfFirstEpisodes(epis)
  * getNumberedEpisode(epis, sNum, eNum)
  * getSeasonLengths(epis) //(advanced)
  *...
  
**pre-coding - looking again at the data**
* Does it contain an array or an object, at the top level?
  * If you think it contains an object at top level, what are the properties of the object?
  * If you think it contains an array at top level, how many elements are there in that array?

**back to pure JS coding**
* looping over the array of episodes, printing to console
* filtering the episode list by a string's occurence in episode summaries
  * (based of necessity on a hard-coded value)
* finding and reporting ONE episode based on a find for season and episode numbers

**on paper**
* **page layout design** (use a whiteboard app (or marvel, etc?) if remote)

**html + vanilla JS coding**

* **static** JSON file - **ONE episode**
* **static** JSON file - **LOOP through all episodes**
* **fetch of the JSON from API**

** using input fields - no change to API use**
* add a search input and array.filter the episodes (based on string occurrence in summary)
* episode selector drop-down ("s01e08: The Pointy End") (with scroll/jump to place in list) 
* defensive coding: 
  * defend against null `episode.image` (e.g. The Simpsons)
  * defend against null `episode.summary` (e.g. The Voice)

**responsive design**

**more advanced**
* single-episode version: fetching ONE resource, based on the selector
* season selector, using multiple resources from the API

# things to avoid

* Don't have tens of resources being loaded that overwhelm exploration (e.g. in network tab)
* Don't have the project source consist of tens or hundreds of files.  index.html, style.css, script.js, and maybe an image.
* Don't have students first trying to visualise what their programmatically created html page will LOOK like while they're staring at a page of code full of `document.createElement()` and `elem.appendChild()`.  Have them build a prototype page first  (e.g. in codepen) so they know exactly the page structure they're trying to create, down to the individual tag and class.
* don't try to describe the challenge in text where a screenshot would do
* don't give a working live version for students to play with without obfuscating the sources - some will copy-paste.  Instead, use screenshots (and a video of any interaction).
* Don't give the project an expiry date as a portfolio item.  Use a long-lived API with data which will likely continue (e.g. based on visualisation of PRs that will be deleted).  
* Consider making permanently available the student's prototype version with static data as portfolio item when they want to  do crucial demos without worrying about the API being available, etc.
* Don't use APIs that are going to rate-limit the students through the likely repeated calling during development.


# incremental steps for the react version

TODO, but most of the above still applies.


