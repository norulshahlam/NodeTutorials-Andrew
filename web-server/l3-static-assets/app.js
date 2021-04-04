/*
continue from previous lesson,

this time we serve up static assets

make use of path.join() - The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. 

https://nodejs.org/api/path.html#path_path_join_paths

uusing 'use()'

we can route to the html pages insted of creating many response for each url. then we can remove the responsse handler after using 'use()'


*/

const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);

//this is just taking the current dir path and rerouting it
const publicDir = path.join(__dirname, "/pages");

//this will replace the root url below
app.use(express.static(publicDir));

// app.get("", (req, res) => {
//   res.send("<h1>hello express</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "shah",
//     age: 21,
//     employed: "true",
//   });
// });

//run: http://localhost:3000/about
// app.get("/about", (req, res) => {
//   res.send("<h1>about</h1>");
// });

//run: http://localhost:3000/weather

app.get("/weather", (req, res) => {
  res.send({
    location: "sg",
    forecast: "snow",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

/*
now with 3 pages created, simply go to url to load the static pages
http://localhost:3000/
http://localhost:3000/help.html
http://localhost:3000/about.html

*/
