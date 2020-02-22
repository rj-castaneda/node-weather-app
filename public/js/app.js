// API to fetch from : puzzle.mead.io/puzzle

// fetch("http://puzzle.mead.io/puzzle").then(response => {
//   return response.json().then(data => {
//     console.log(data);
//   });
// });

const url = "http://localhost:3000/weather/?address=boston";
fetch(url).then(response => {
  return response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
