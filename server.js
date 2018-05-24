const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.get("/js/drone.js", (req, res) => {
  res.sendFile(__dirname + "/js/drone.js");
})
app.get("/js/main.js", (req, res) => {
  res.sendFile(__dirname + "/js/main.js");
})
app.get("/css/styles.css", ( req, res ) => {
  res.sendFile( __dirname + "/css/styles.css" ); 
});
app.get("*", ( req, res ) => {
  res.sendFile( __dirname + "/client/build/static/index.html" );
})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`) );
});