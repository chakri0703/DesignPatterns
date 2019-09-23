var Task=function(name){
    this.name=name;
    this.completed=true;

    this.completed=function(){
        console.log("name"+this.name);
        this.completed=false;
        console.log();
        console.log("checking the completed  ==>",this.completed);
           
    }
    this.save=function(){
        console.log("savin the object \n");
        
    }
}

var task1=new Task('chakri');
task1.completed();
task1.save();