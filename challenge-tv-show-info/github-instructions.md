# Instructions: Hosting your tv-info react app on github

Here are instructions for hosting your tv-info React app on github.  

Why would you want to do this? 
* Potential employers can see an example of your code
* You have a more permanent backup of your code
* You get practice using github
* You can ask for code reviews

When you started with `create-react-app`, that command also made a git repository locally for your project.
We will:
* ensure your work is committed to that local repo, 
* create an empty repo on github to act as a "remote" for the local one, 
* push the changes from the local repo to the github "remote"

## Step-by-step

* Open a terminal
* `cd` into the correct directory for your react tv-info project
* Add and commit all changes to git, locally, using git add and git commit
* Open github.com in a browser (ensure you are logged in)
* In the top-right click the plus (+) sign
* Choose "new repository"
* Add a suitable name for the repository. e.g. `tv-info-react` or `game-of-thrones-react`
* Don't change anything else
* Click `create repository` at the bottom of the form
* Find the section entitled "...or push an existing repository from the command line"
* Copy the FULL `git remote add origin` command from that section
* Paste it into terminal, and ensure it runs with no errors
* Run the second command: `git push -u origin master`
* Reload your github page and explore to ensure your most recent code is there.

### Optional 1: link to your deployed project from your new github repo.

It is a good idea to link from your github repo to your deployed react app.
* Click on "No description, website, or topics provided."
* When the form expands, edit the "website" field to have a link to your deployed project on netlify (e.g. https://elaminwk.netlify.com/)

### Optional 2: link to your source on github from the footer of your react app

* In your React app, add or edit the app's Footer component to include a link back to your new github repo so that people can look at your source code.
