const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    name: {type: String, require: false},
    surname: {type: String, require: false}
});

module.exports = model('User', schema);