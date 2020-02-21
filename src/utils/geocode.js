const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmlrYXhkIiwiYSI6ImNrNmlmMWJyaTAwZGQzb254MDRrdTh2N3UifQ.mBpaiZTgWjuIBBHrDjNVlg&limit=1";

  request({ url, json: true }, (e, { body }) => {
    if (e) {
      callback("undable to reach services", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
