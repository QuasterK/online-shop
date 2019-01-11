const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// @route   GET api/user/test
// @desc    testing router
// @access  Public

router.get('/test', (req, res) => {
    return res.json({msg: 'router user is working'})
});

// @route   POST api/user/register
// @desc    register user on website
// @access  Public

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
        .then( user => {
            if (user) {
                return res.status(404).json({msg: 'User with chosen email already exist'})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
            }
        })

});

module.exports = router;