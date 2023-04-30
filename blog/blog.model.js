const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: Number,
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  img: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
