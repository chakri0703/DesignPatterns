var Mortgage = function(name,amount) {
    this.name = name;
    this.amount=amount;
}
 
Mortgage.prototype = {
 
    applyFor: function() {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, this.amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + this.amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Joan Templeton","$100,000");
    var result = mortgage.applyFor();
 
  console.log("result==>",result);
  
}
run();