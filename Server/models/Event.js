const { Schema, model } = require('mongoose');

const schema =  new Schema({
    creatorName: {type: String, required: true},
    creatorSurname: {type: String, required: true},
    creatorEmail: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    place: {type: String, required: true},
    descr: {type: String, required: true}
});

module.exports = model('Event', schema);