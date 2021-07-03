const router = require('express').Router();

const Users = require('./users-model');
const restrictedMiddleWare = require('../auth/restricted-middleware');


router.get('/', restrictedMiddleWare, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err =>  res.send(err));
})



  module.exports = router;