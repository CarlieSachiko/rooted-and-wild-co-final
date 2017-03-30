var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  createdAt: {type: Date, default: Date.now}
});

var blogPostSchema = new mongoose.Schema({
  title: String,
  paragraphs: [String],
  url_title: String,
  comments: [commentSchema],
  likes: Number,
  images:[String],
  createdAt: {type: Date, default: Date.now},
  date: String
});


module.exports = mongoose.model('Post', blogPostSchema);
