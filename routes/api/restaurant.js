// This is an EXCELLENT promise library!
import Q from 'q';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load Restaurant model
const Restaurant = require('../../Model/Restaurant');

// @route   GET api/restaurant/test
// @desc    Tests restaurant route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   Post api/restaurant/register
// @desc    Register restaurant
// @access  Public
router.post('/register', async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  const generateSalt = (iterations = 10) => {

      const p = Q.defer();

      bcrypt.genSalt(iterations, (err, salt) => {
         if (err) {
             p.reject(err);
         } else {
             p.resolve(salt);
         }
      });

      return p.promise;

  }

  const hashPassword = async (password) => {
      const p = Q.defer();

      try {
          const salt = await generateSalt();
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                p.reject(err);
            } else {
                p.resolve(hash);
            }
          });
      } catch (ex) {
          throw ex;
      }

      return p.promise;
  };

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // I have re-written this in async/await.
  // See how nice it becomes!
  try {
    const rest = Restaurant.findOne({ email: req.body.email });
    if (rest) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
    }

    const password = await generateHash(req.body.password);

    const newRest = new Restaurant({
      name: req.body.name,
      email: req.body.email,
      loc_name: req.body.loc_name,
      loc: req.body.loc,
      tags: req.body.tags,
      password
    });

    newRest.password = await generateHash(newRest.password);

    const saveModel = await newRest.save();
    return res.json(saveModel);

  } catch (ex) {
    throw ex;
  }
});

router.post('/restFindByReg', (req, res) => {
  console.log(req.body.name);
  console.log(typeof req.body.name);

  Restaurant.find({ name: { $regex: req.body.name } }).then(rest => {
    console.log(rest);

    if (rest) {
      res.json({
        rest
      });
    }
  });
});

router.post('/restFindByCuisine', (req, res) => {
  Restaurant.find({ tags: req.body.tags })
    .then(rest => {
      if (rest) {
        res.json(rest);
      }
    })
    .catch(err => res.json('Restaurant not found.'));
});

module.exports = router;
