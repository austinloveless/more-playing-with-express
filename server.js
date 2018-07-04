const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

app.disable("x-powered-by");
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("thanks for visiting the home page");
// });

app.get("/about/:user", (req, res) => {
  res.send(`thanks for telling us about you ${req.params.user}`);
});

app.set("view engine", "ejs");

app.get("/yourStory/:you", function(req, res) {
  // Use res.render to "pass in values" that the HTML document will be able to render
  // into the template (see below)
  res.render("index", {
    name: "Rumplestilskin",
    title: "Playing with express",
    copyRightName: "Austin Loveless"
  });
  res.send(req.parmas.you);
});

app.post("/posts/:user", (req, res) => {
  let name = req.query.name;
  res.send(`hello ${name} your user name is ${req.params.user}`);
});

app.get("/*", (req, res) => {
  res.status(404).send("please try another url");
});

app.listen(port, () => {
  console.log("listening on port", port);
});