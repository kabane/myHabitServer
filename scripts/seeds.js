var mongoose = require('mongoose'),
    Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})

todos = [
    {name: 'todo1', status: 0},
    {name: 'todo2', status: 0},
    {name: 'todo3', status: 0},
    {name: 'todo4', status: 0},
    {name: 'todo5', status: 1},
    {name: 'todo6', status: 1},
    {name: 'todo7', status: 1},
    {name: 'todo8', status: 1}
]

var TodoSchema = new Schema({
    name: String,
    status: Number
})
var Todo = mongoose.model('Todo', TodoSchema)

Todo.deleteMany({}, function(err){
    if (err) {
        console.log(err)
    } else {
        console.log('Deleted Todo')
    }
})

for(var i = 0; i < todos.length; i++) {
    var todo = new Todo({
        name: todos[i].name,
        status: todos[i].status
    })

    todo.save(function(err){
        if (err) {
            console.log(err)
        } else {
            console.log("Success Todo Created")
        }
    })
}

process.on("exit", function() {
    process.exit(1);
});