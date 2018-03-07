var express = require('express');
var router = express.Router();
var Business = require('../models/Business');

router.route('/')

    .get((req, res) => {
        Business.scan().exec((err, resp) => {
            if(err)
              res.json({
                  message: 'Error running query',
                  err
              });

            if (resp.Count) {
                res.json(resp.Items)
            } else {
                res.json([]);
            }
        });
    })

    .post(function(req, res) {
        Business.create(req.body, function (err, business) {
            if (err)
            
            res.json({ message: err }) 

            res.json({business})
        });
    });

router.route('/:id')

    .get(function(req, res) {
        Business.query(req.params.id).exec((err, resp) => {
            if(err)
              res.json({
                  message: 'Error running query',
                  err
              });

            if (resp.Count) {
                res.json(resp.Items)
            } else {
                res.json({message: 'No business found'});
            }
        });
    })

    .put(function(req, res) {
        Business.update(req.body, (err, business) => {
            res.json({business})
        });
    })

    .delete(function(req, res) {
        Business.destroy(req.params.id, function (err) {
          res.json('business deleted');
        });
    });

module.exports = router;
