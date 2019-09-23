var task3={
    'title':'My Title',
    'description':'My Description'
};

Object.defineProperty(task3,'toString',{
    value:function(){
        return this.title+'\n'+this.description
    },
    writable:false,
    enumerable:false,
    configurable:false
})

var urgentTask=Object.create(task3);

Object.defineProperty(urgentTask,'toString',{
    value:function(){
        console.log("in urgent task"+this.title);
        
    }
})
task3.toString='hi'
console.log(task3);
urgentTask.toString()
// console.log(task.toString());
