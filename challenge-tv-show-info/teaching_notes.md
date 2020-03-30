# incremental steps for pre-react version of this challenge

**pre-coding - looking at the data**
* looking at one episode of the JSON, 
* identifying and extracting key elements of the data:  episode name, img url, summary

**pure JS**
* extracting key elements of the data from ONE episode JSON (episode name, summary, img url, etc)
  * presenting in plain text on the (node) console
* coding necessary manipulations of those key elements, presenting to console
  * e.g. truncating summary to 100 chars
  * e.g. making a fixed-width episode tag like `S01E03` from `{..., seasonNumber: 1, episode: 3 }`
  * e.g. optional: clean-up of p tags in summary.
  * (if teaching testing: writing tests for these examples)
* looping over the array of episodes, printing to console
* filtering the episode list by a string's occurence in episode summaries
  * (based of necessity on a hard-coded value)
* finding and reporting ONE episode based on a find for season and episode numbers

* **on paper**: page layout design (use a whiteboard app (or marvel, etc?) if remote)

* html + vanilla JS + DOM with **static** JSON file - **ONE episode**
* html + vanilla JS + DOM with **static** JSON file - **LOOP through all episodes**
* html + vanilla JS + DOM with **fetch of the JSON from API**
* html + vanilla JS + DOM with input to array.filter the episodes (based on string occurrence in summary)
* html + vanilla JS + DOM with episode selector drop-down ("s01e08: The Pointy End")
* season selector
* responsive design

# incremental steps for the react version

TODO, but most of the above still applies.
