var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.save = function () {
    console.log("saving task: " + this.name);
}

Task.prototype.complete = function () {
    console.log("completing task: " + this.name);
    this.completed = true
}

var task = new Task('Lagecy Task');
task.complete();
task.save();


var UrgentTaks = function (name, priroty) {
    Task.call(this, name);
    this.priroty = priroty;
}

UrgentTaks.prototype = Object.create(Task.prototype);

UrgentTaks.prototype.notify = function () {
    
    console.log("informing the import people");

}
//wrapping the save function in Urgent task
UrgentTaks.prototype.save = function () {
    this.notify();
    console.log('doing some Special task');
    Task.prototype.save.call(this);
}
var ut = new UrgentTaks('this is urgent ', 1);
// console.log("checking urgent task object =>", ut);
ut.complete();
ut.save();