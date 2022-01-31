const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    email: { type: String },
    hashedPassword: { type: String }
});

module.exports = model('User', userSchema);

