var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: String,
    status: Number,
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('Todo', TodoSchema);