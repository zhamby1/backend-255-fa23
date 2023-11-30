const db = require("../db");

// Create a model from the schema
const Song = db.model("Song", {
   //hidden parameter of _id
   title:       { type: String, required: true },
   artist:      String,
   popularity:  { type: Number, min: 1, max: 10 },
   releaseDate: { type: Date, default: Date.now },
   genre:       [ String ]
});

module.exports = Song;