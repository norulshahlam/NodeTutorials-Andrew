`deploying to heroku`

the final version of the project to run is located at web-server/l7-fetch/app.js

we need to do 3 things for deployment:

specify to heroku this directory to run this app.js during deployment. to specify, we need to add scripts in package.json

`1. add script`

in package.json, add scripts:

"start": "node web-server/l7-fetch/app.js"

to test if this link is working, simply run: npm run start

`2. change port`

Currently we use port 3000 when we're running the app locally on our machine but heroku is going to provide us with a port value that we have to use when our app is running on heroku.

port value provided by heroku isn't a static value we can hard code in the project. It is a value that changes over time and it's provided to our application via and environment variable. It is just a key value pair set at the OS level.

In this case heroku sets one for the port where the value is the port number to use. we need to do to actually is create 2 port value references - 1 for when we run on locally, 1 when it is running on heroku which heroku provides.

### `const port = process.env.PORT || 3000`

this means that if it is running on heroku, it will be provided port number. else we will default back to port 3000 which only happens when it is run locally. set this variable below:

app.listen(port, () => {
console.log("server is up on port "+port);
});

`remove localhost`

In app.js of the client side, remove localhost along with the port number:

from

### fetch(`http://localhost:3000/weather?address=${value}`)

to

### fetch(`/weather?address=${value}`)

This makes the URL relative to the domain name so,

if your domain is www.website.com then it'll go to www.website.com/weather?address=boston.

if your domain is localhost, then it'll go to localhost/weather?address=boston.
