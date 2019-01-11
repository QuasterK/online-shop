const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

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
                return res.status(400).json({msg: 'User with chosen email already exist'})
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
                return res.status(404).json({msg: 'invalid user'})
            }

            //if user is in db check password
            bcrypt.compare(req.body.password, user.password)
                .then( result => {
                if(result){
                    //will use jwt
                    return res.json({msg: 'logged in'})
                }else{
                    return res.status(404).json({password: 'password incorrect'})                }
            });
        })
} );
module.exports = router;