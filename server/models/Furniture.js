const { Schema, model } = require('mongoose');

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: [true, 'Make is required'],
        minLength: [4, 'Make must be at least 4 characters length']
    },

    model: {
        type: String,
        required: [true, 'Model is required'],
        minLength: [4, 'Make must be at least 4 characters length']
    },

    year: {
        type: Number,
        required: [true, 'Model is required!'],
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },

    description: {
        type: String,
        required: [true, 'Model is required'],
        minLength: [10, 'Description must be at least 10 characters length'] },

    price: {
        type: Number,
        required: [true, 'Model is required'],
        min: [0.01, 'Price must be greater than 0.1']
    },

    img: {
        type: String,
        required: [true, 'Model is required']
    },

    material: {
        type: String
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' }
});

module.exports = model('Furniture', furnitureSchema);
