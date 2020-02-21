const path = require("path");
const express = require("express");

const app = express();
const pathToPublic = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(pathToPublic));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Ricardo Castaneda"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ricardo Castaneda"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    helpText: "This is a helpful text"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "San Diego",
    temperature: "67 degrees"
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
