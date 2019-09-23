var Task = function(name){
    this.name=name;
    this.complete=false;
}

Task.prototype.completed=function(){
    console.log("is Completed=>",this.complete);
    this.complete=true;
    console.log("is completed=>",this.complete);
}

Task.prototype.save=function(){
    console.log("saved=>",this.name);
}

module.exports=Task