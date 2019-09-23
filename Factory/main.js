var Factory = require('./factory');

var factory = new Factory();

var user = factory.get('User')
// console.log('printing the object getting from factory ' + user.save());
console.log(user.save());

var repo=factory.get('repo');
console.log(repo.save('chakri'));

var task=factory.get('task');
console.log(task.save('chakravarthi'));



