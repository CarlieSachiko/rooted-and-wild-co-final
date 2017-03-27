var Bouquet = require('../models/bouquet');

module.exports = {
  addBouquet,
  getAllBouquets,
  getBouquet
};

function addBouquet(req, res, next) {
  Bouquet.create(req.body).then(bouquet => {
    res.json({msg: 'successfully added bouquet'});
  }).catch( err => res.status(400).json(err) );
}

function getAllBouquets(req, res, next) {
  Bouquet.find().then(bouquets => {
    res.json(bouquets);
  }).catch(err => res.status(400).json(err));
}

function getBouquet(req, res, next) {
  Bouquet.findById(req.params.id).then(bouquet => {
    res.json(bouquet);
  }).catch(err => res.status(400).json(err));
}

