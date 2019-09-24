var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

Task.prototype.complete=function(){
    console.log("task is completing "+this.name);
    this.completed=true;
}

Task.prototype.save=function(){
    console.log("saving task "+this.name);
    return "return from task"
}

module.exports=Task;