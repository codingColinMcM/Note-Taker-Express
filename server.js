// Import Express, Path
const express = require("express");
const path = require("path");
const routes = require("./controllers");
const { json } = require("express");
const fs = require("fs");


// Use ecpress to instantiate/create a copy of a web server
var app = express();

// Using milware before routing
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);