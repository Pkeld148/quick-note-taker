const fs = require("fs");
const db = require("../db/db.json");
const path = require("path");
const uuid = require("uuid");

// API Routes
module.exports = function (app) {
  // Route for reading notes
  app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
      if (err) throw err;
      const notes = JSON.parse(data);
      res.JSON(notes);
    });
  });

  // Route for making new notes
  app.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
      if (err) throw err;
      const notes = JSON.parse(data);
      const newNote = req.body;
      newNote.id = uuid.v4();
      notes.push(newNote);

      const createNote = JSON.stringify(notes);
      fs.writeFile(
        path.join(__dirname, "./db/db.json"),
        createNote,
        function (err, data) {
          if (err) throw err;
        }
      );
      res.JSON(newNote);
    });
  });
};
