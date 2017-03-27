var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var contactCtrl = require('../controllers/contact');
var blogCtrl = require('../controllers/blog');

// Public routes (no auth required)
router.post('/users/login', userCtrl.login);
router.get('/users/logout', userCtrl.logout);
router.post('/users', userCtrl.create);
router.get('/users/me', userCtrl.me);

router.get('/blog-posts', blogCtrl.getAllPosts);
router.get('/blog-posts/:id', blogCtrl.showPost);
// router.get('/blog-posts/:id', blogCtrl.getPost);
router.post('/blog-posts', blogCtrl.addPost);
router.put('/blog-posts/:id', blogCtrl.updatePost);
router.post('/blog-posts/:id/comments', blogCtrl.addComment);

router.post('/contact', contactCtrl.sendMail);


// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});

// Protected routes (authentication required)

module.exports = router;
