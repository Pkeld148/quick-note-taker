var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use(express.static("public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});