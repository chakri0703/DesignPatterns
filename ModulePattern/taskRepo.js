//encapsulating the get and save in repo 
var repo = function () {

    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new Task from db'
        }
    }
    var save = function (task) {
        console.log('saving ' + task.name + ' to db ');

    }

    return {

        get: get,
        save: save
    }

}


module.exports = repo(); 