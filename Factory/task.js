var Task = function(){
}

Task.prototype.save=function(name){
    console.log("this save "+name);
    return "form Task";
}

module.exports=Task