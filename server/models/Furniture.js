const { Schema, model } = require('mongoose');

const furnitureSchema = new Schema({
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    description: { type: String },
    price: { type: Number },
    img: { type: String },
    material: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Furniture', furnitureSchema);
