\***\*\*\*\*\***\*\*\*\***\*\*\*\*\*** for webserver folder \***\*\*\*\*\***\*\*\*\***\*\*\*\*\***

`deploying to heroku`

the final version of the project to run is located at web-server/l7-fetch/app.js

we need to do 3 things for deployment:

`1. add script`

when Heroku starts up our application, it looks for 'start' script in package.json where it contains the main file to run. And our main file to run this app is located at web-server/l7-fetch/app.js. lets add this script in package.json -

in package.json, add scripts:

### "start": "node web-server/l7-fetch/app.js"

to test if this link is working, simply run: npm run start

Not related to deployment: we usually run nodemon during development so we can specify a script to run nodemon too:

### "dev": "nodemon web-server/l7-fetch/app.js -e js,hbs,css "

then we just run: npm run dev. note that the dir is fix so everytime we run script, it will go to that directoy. if we 1 2 run other app.js in other project folder we can just run manually like we used to:

### nodemon app.js -e js,hbs,css

`2. change port`

Currently we use port 3000 when we're running the app locally on our machine but heroku is going to provide us with a port value that we have to use when our app is running on heroku.

port value provided by heroku isn't a static value we can hard code in the project. It is a value that changes over time and it's provided to our application via and environment variable. It is just a key value pair set at the OS level.

In this case heroku sets one for the port where the value is the port number to use. we need to do to actually is create 2 port value references - 1 for when we run on locally, 1 when it is running on heroku which heroku provides.

### `const port = process.env.PORT || 3000`

this means that if it is running on heroku, it will be provided port number. else we will default back to port 3000 which only happens when it is run locally. set this variable below:

### app.listen(port, () => {console.log("server is up on port "+port); });

`3. remove localhost`

In app.js of the client side, remove localhost along with the port number:

from

### fetch(`http://localhost:3000/weather?address=${value}`)

to

### fetch(`/weather?address=${value}`)

This makes the URL relative to the domain name so,

if your domain is www.website.com then it'll go to www.website.com/weather.
if your domain is localhost, then it'll go to localhost:3000/weather

`additional`

The only reason the devs script works is because we have node man installed as a global module. The problem with global modules is that they're not local dependencies.

So if we're using them in a specific project it's best to try to install everything locally.

if we gave this project to someone else. The problem is that when they go to use that Dev script it's gonna fail because our project technically depends on nodemon but does not have it as a dependency cos we installed in globally, on our localhost only. not on the project itself.

It's also trickier when different versions expect to be used in different ways.
This might not work with the version even they have installed packages themselves.

So the solution is to uninstall nodemon globally and to install it as a local dependency

unistall:

### npm uninstall -g nodemon

in case it is already installed with conflicting version,

### npm uninstall nodemon --save-dev

install back locally:

### npm i nodemon@1.2.0 --save-dev

further reading

`https://www.geeksforgeeks.org/what-is-the-difference-between-save-and-save-dev-in-node-js/`
