const express = require("express");

const app = express();

// this specifies to the server what the response should be when someone tries to get something at a specific url
app.get("", (req, res) => {
  // the function indicates what to do (what we are sending back)
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Ricardo",
      age: 27
    },
    {
      name: "Jason",
      age: 30
    }
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "San Diego",
    temperature: "67 degrees"
  });
});

//start the server up and listen on a specific port
app.listen(3000, () => {
  // this messages is not for the user, this is for the person running the server to let them know it ran correctly
  console.log("server is up on port 3000.");
});
