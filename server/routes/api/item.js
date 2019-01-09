const express = require('express');
const router = express.Router();

//load item model

const Item = require('../../models/Item');

// @route   GET api/item/get-all
// @desc    getting all items
// @access  Public

router.get('/get', function (req, res) {
    Item.find()
        .then(item => res.json(item))
        .catch(err => res.status(404).json({noitem: 'no items for sale'}))
});

// @route   POST api/item/add
// @desc    add new item to db
// @access  Public

router.post('/add', (req, res) => {
    Item.findOne({name: req.body.name})
        .then(item => {
            if(item) {
                return res.status(400).json({message: 'item is already in database'})
            }else{
                const newItem = new Item({
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    discount: req.body.discount,
                    size: req.body.size,
                    brand: req.body.brand,
                    color: req.body.color,
                });

                newItem
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            }

        })
});


module.exports = router;
