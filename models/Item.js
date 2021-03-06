const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
      type: String,
      required:true
    },
    category: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('item', ItemSchema);
