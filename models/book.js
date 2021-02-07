const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description : { type: String },
    image: { type: String },
    link: { type: String }
});

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;