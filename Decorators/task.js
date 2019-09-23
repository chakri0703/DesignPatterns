var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.save=function(){
    console.log("saving task: "+this.name);
}

Task.prototype.complete=function(){
    console.log("completing task: "+this.name);
    this.completed=true
}

var task = new Task('Lagecy Task');
task.complete();
task.save();

var urgentTask=new Task('Urgent');
//i am adding some states to existing Task Object
urgentTask.priority=100;
urgentTask.notify=function(){
    console.log("notifying to important people");
}

urgentTask.complete();
//overridding the exixting save fuction with this save function
urgentTask.save=function(){
    this.notify();
    Task.prototype.save.call(this)
}

urgentTask.save();
