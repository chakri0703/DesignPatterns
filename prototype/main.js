var Task=require('./prototypeObject')
var task3=new Task('checking');
var task1=new Task('testing');
var task2=new Task('cheating');

task3.completed();
task3.save();
task1.save();
task2.save()