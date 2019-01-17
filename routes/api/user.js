const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const key = require('../../config/keys');

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
            //check if user is in db
            if (user) {
                return res.status(400).json({email: 'User with chosen email already exist'})
            } else {
                //create new user
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                //hash passowrd with bcryptjs
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                });

            }
        })

});

// @route   POST api/user/login
// @desc   login user on website if is already registered
// @access  Public

router.post('/login', (req, res) =>{
    User.findOne({email: req.body.email})
        .then( user => {
            //check if user is in DB
            if(!user){
                return res.status(404).json({email: 'invalid email address'})
            }

            //if user is in db check password
            bcrypt.compare(req.body.password, user.password)
                .then( result => {
                if(result){
                    //jwt
                    const payload = {id: user.id, name: user.name, email: user.email};
                   jwt.sign(payload,
                       key.secretOrKey,
                       { expiresIn: '1h' },
                       (err, token) =>{
                       return res.json({token:'Bearer ' + token})
                       })
                }else{
                    return res.status(404).json({password: 'password incorrect'})                }
            });
        })
} );

// @route   GET api/user/profile
// @desc   test login with token
// @access  Private

router.get('/profile',
    passport.authenticate('jwt',{session: false}),
        (req, res) => {
            res.json({
                id: req.user.id,
                name: req.user.name,
                email: req.user.email
            });
        }
);

module.exports = router;