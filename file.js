console.log("starting to make request");

const schedule = require("node-schedule");
const axios = require("axios");

const URL_1 = "https://habituate-me-backend.onrender.com/authentication";

async function makeRequestHabituateMeBackend() {
  console.log(
    `Executing the function at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.`
  );
  await axios
    .get(URL_1)
    .then((response) => {})
    .catch((error) => {
      if (error.response.status === 401) {
        console.log(
          `Success making request to the authentication endpoint for habituate me. Received ${error.response.status} code from the API.`
        );
      }
    });
}

schedule.scheduleJob("*/1 9-18 * * *", () => {
  console.log(
    `Running the job at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.`
  );
  makeRequestHabituateMeBackend();
});
