var User = require('../models/user');
var jwt = require('jsonwebtoken');
var auth = require('../config/auth');
var SECRET = process.env.SECRET;

module.exports = {
  create,
  login,
  logout,
  getOrders,
  addOrder,
  me
};

function create(req, res, next) {
  User.create(req.body).then(user => {
    auth.createToken(user, res);
    res.json({msg: 'signed up successfully'});
  }).catch( err => res.status(400).json(err) );
}

function login(req, res, next) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        auth.createToken(user, res);
        res.json({msg: 'logged in successfully'});
      } else {
        return res.status(401).json({err: 'Incorrect emailor password'});
      }
    });
  }).catch(err => res.status(401).json('Error occured: ' + err));
}

function logout(req, res, next) {
  req.session.userId = null;
  res.status(200).json({});
}

function me(req, res, next) {
  res.json(req.user);
}

function getOrders(req, res, next) {
  User.findById(req.params.id).populate('orders').exec(function(err, user) {
    res.json(user);
    console.log(user);
  }).catch(err => res.status(400).json(err));
}

function addOrder(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    user.orders.push(req.body.orderId);
    user.save(function(err){
      if(err) {
        console.log(err);
      }
    });
  });
}


