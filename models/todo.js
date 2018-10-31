var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: String,
    status: Number,
    elapsed_time: Number,
    category_id: {type: Schema.Types.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Todo', TodoSchema);