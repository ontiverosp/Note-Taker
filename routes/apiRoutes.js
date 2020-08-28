var notes = require("../db/db.json");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });


    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        var id = Date.now();
        newNote.id = id;
        notes.push(newNote);
        fs.writeFileSync(outputPath, JSON.stringify(notes));
        res.send(newNote)
    });


    app.delete("/api/notes/:id", function (req, res) {
        var toDelete = req.params.id;
        for (i=0; i<notes.length ; i++) {
            if (notes[i].id == toDelete){
                notes.splice(i, 1);
            } 
        }
        fs.writeFileSync(outputPath, JSON.stringify(notes));
        res.send('Delete request complete')
    });

};
