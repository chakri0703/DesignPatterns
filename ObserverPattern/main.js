var Task = require('./task');

var notificatinService = function () {
    var message = 'notifying';
    this.update = function (task) {
        console.log(message + task.user + "  for task " + task.name);

    }
}

var loggingService = function () {
    var message = 'logging';
    this.update = function (task) {
        console.log(message + task.user + "  for task " + task.name);

    }
}

var auditingservice = function () {
    var message = 'auditing ';
    this.update = function (task) {
        console.log(message + task.user + "  for task " + task.name);

    }
}

function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}
var ObserverTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObserverTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObserverTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}
ObserverTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}
var task1 = new ObserverTask({ name: 'creating a demo', user: 'chakri' });

var notService = new notificatinService();
var logService = new loggingService();
var auditService = new auditingservice();

task1.addObserver(notService.update);
task1.addObserver(logService.update);
task1.addObserver(auditService.update);

task1.save();