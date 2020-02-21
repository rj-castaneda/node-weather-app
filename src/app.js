const path = require("path");
const express = require("express");

const app = express();
const pathToPublic = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(pathToPublic));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Ricardo Castaneda"
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
