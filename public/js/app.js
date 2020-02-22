// const url = "http://localhost:3000/weather/?address=" + location;

const inputLocEl = document.getElementById("input-form");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");
text.focus();

inputLocEl.addEventListener("submit", e => {
  e.preventDefault();
  const location = e.target[0].value;
  message1.textContent = "";
  message2.textContent = "";
  fetch(`http://localhost:3000/weather/?address=${location}`).then(response => {
    return response.json().then(data => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecast;
      }
    });
  });
});
