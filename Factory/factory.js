var Factory=function(){
}

Factory.prototype.get=function(data){
    if(data==='User'){
        var user= require('./user');
        return new user();
    }
    if(data==='repo'){
        var repo=require('./repo')
        return new repo();
    }
    if(data==='task'){
        var task=require('./task')
        return new task();
    }
}

module.exports=Factory;