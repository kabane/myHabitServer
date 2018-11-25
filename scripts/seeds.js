var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Todo = require('../models/todo'),
    Category = require('../models/category');

mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true});

Category.deleteMany({})
.then(
    function () {
        console.log('create Category');
        return Category.insertMany([
            {name: '開発'},
            {name: '雑務'},
            {name: 'その他'}
        ]);
    }
)
.then(
    function() {
        console.log('delete Todo');
        return Todo.deleteMany({});
    }
)
.then(
    function() {
        return Category.find({}, function(e, category){
            console.log('create Todo');
            return Todo.insertMany([
                {name: 'todo1', status: 0, elapsed_time: 0, category_id: category[0]},
                {name: 'todo2', status: 0, elapsed_time: 0, category_id: category[1]},
                {name: 'todo3', status: 0, elapsed_time: 0, category_id: category[2]}
            ]);
        })
    }
)
.then(
    function () {
        process.exit(1);
    }
)
.catch(
    function() {
        console.error(err);
        process.exit(1);
    }
)

