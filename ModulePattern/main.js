var Task = require('./task')
var Repo = require('./taskRepo')

var task1 =new Task (Repo.get(1));
var task2 = new Task({name:'testing'});
var task3 = new Task({name:'cheating'});

task3.completed();
task3.save();
task1.save();
task2.save()