const { Schema, model } = require('mongoose');

const schema =  new Schema({
    heading: {type: String, required: true},
    descr: {type: String, required: true},
    link: {type: String, required: true}
});

module.exports = model('Article', schema);