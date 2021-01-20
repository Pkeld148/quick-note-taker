const fs = require("fs");
const db = require("../db/db.json");

// API Routes
module.exports = function(app) {

app.get("/api/notes", function (req, res) {
   res.send(db);
    })
}
