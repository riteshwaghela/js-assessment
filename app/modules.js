exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(greeting, name) {
    var MyClass = function(gr, name){
      this.greeting = gr;
      this.name = name;
    }
    MyClass.prototype.sayIt = function(){
      return this.greeting+", "+this.name;
    }
    
    return new MyClass(greeting, name);
   
    }
  }
};
