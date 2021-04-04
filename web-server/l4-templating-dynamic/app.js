/*
continue from previous lesson,

1. Dynamic Pages with Templating - use template engine 

A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

https://expressjs.com/en/guide/using-template-engines.html

2.  using handlebars

run npm:  npm i hbs

3. Partials with handlebars partials

as the name suggests it allows you to create a little template which is part of a bigger web page. eg parts of the web page that you're gonna end up reusing across multiple pages in your site. This would be things like headers or footers where you want the exact same thing showing on every page


*/

const express = require("express");
const path = require("path");
const app = express();
console.log(path.join(__dirname));

//setup handler engine
app.set("view engine", "hbs");

/* set up 'view' directory in parent/views. all the response will rout to this dir.  */
app.set("views", path.join(__dirname, "/views"));

//set route
app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "shah",
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    forecast: "it is snowing",
    location: "philadelphia",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "shah",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "What do you need help for?",
    name: "shah",
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
