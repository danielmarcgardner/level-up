const express = require('express');
const knex = require('../knex.js');
const Campuses = require('../collections/campuses');
const Campus = require('../models/campus');

const router = express.Router();

router.route('/campuses/')
  .get((req, res) => {
    Campuses.forge()
    .fetch()
    .then((campuses) => {
      res.json(campuses);
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })


  .post((req, res) => {
    Campus.forge({
      location: req.body.location,
    })
    .save()
    .then((campus) => {
      res.status(200).json(campus);
    })
    .catch(err => console.error(err));
  });

router.route('/campuses/:id')
  .delete((req, res) => {
    Campus.forge({ id: req.params.id })
    .fetch({ require: true })
    .then(campus => campus.destroy())
    .then(() => {
      res.json({ message: 'Campus successfully deleted' });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

module.exports = router;