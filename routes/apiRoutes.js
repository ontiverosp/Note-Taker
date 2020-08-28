var notes = require("../db/db.json")



module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });


    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        var id = Date.now();
        // console.log("pre id: "+JSON.stringify(newNote));
        newNote.id = id;
        // console.log("post id: "+JSON.stringify(newNote));
        notes.push(newNote);
        res.send('POST request complete')
    });


    app.delete("api/notes/:id", function (req, res) {


    });
};
