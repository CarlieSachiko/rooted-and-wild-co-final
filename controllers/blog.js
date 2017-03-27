var Post = require('../models/blog-post');

module.exports = {
  addPost,
  getAllPosts,
  getPost,
  updatePost,
  showPost,
  addComment
};

function addPost(req, res, next) {
  Post.create(req.body).then(post => {
    res.json({msg: 'successfully added post'});
  }).catch( err => res.status(400).json(err) );
}

function getAllPosts(req, res, next) {
  Post.find().then(posts => {
    res.json(posts);
  }).catch(err => res.status(400).json(err));
}

function getPost(req, res, next) {
  Post.findById(req.params.id).exec(function(err, post) {
    res.json(post);
  }).catch(err => res.status(400).json(err));
}

function updatePost(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post) {
      if (err) return res.status(404).json({msg: 'Could not update post'});
      res.status(200).json(post);
    });
}

// function showPost(req, res, next) {
//   // declare a variable to hold the "show" post and the ids of the "next" post and the "prev" post
//   // var results;
//   // fetch the "show" post
//   Post.findById(req.params.id).exec()
//   .then(showPost => {
//     // var results;
//     // results.showPost = showPost;
//     // find the "next" post after the "show" doc
//     res.json(showPost);
//   }).catch(err => res.status(400).json(err));
// }

function showPost(req, res, next) {
  // declare a variable to hold the "show" post and the ids of the "next" post and the "prev" post
  var results = {};
  // fetch the "show" post
  Post.findById(req.params.id).exec()
  .then(showPost => {
    results.showPost = showPost;
    // find the "next" post after the "show" doc
    return Post.findOne({_id: {$gt: req.params.id}}).sort({_id: 1}).exec();
  }).then(nextPost => {
    results.nextPost = nextPost;
    // find the "prev" post
    return Post.findOne({_id: {$lt: req.params.id}}).sort({_id: -1}).exec();
  }).then(prevPost => {
    results.prevPost = prevPost;
    res.json(results);
  }).catch(err => res.status(400).json(err));
}

function addComment(req, res, next) {
  Post.findById(req.params.id).exec(function(err, blog){
    if (blog) {
      blog.comments.push(req.body.data);
      blog.save(function(err, blog) {
        res.status(200).json(blog);
      });
    }
  });
}


