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


    app.delete("/api/notes/:id", function (req, res) {
        var toDelete = req.params.id;
        // console.log(toDelete);
        for (i=0; i<notes.length ; i++) {
            // console.log(notes[i].id)
            if (notes[i].id == toDelete){
                // console.log("one match" + JSON.stringify(notes[i]))
                notes.splice(i, 1);
            } 
        }
        res.send('Delete request complete')
    });

};
