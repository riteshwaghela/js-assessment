exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
        fn.apply(null, arr);
  },

  speak : function(fn, obj) {
        fn.call(obj);
  },

  functionFunction : function(str) {
        return function(anotherStr){
            return str +','+anotherStr;
        }
  },

  makeClosures : function(arr, fn) {
        
  },

  partial : function(fn, str1, str2) {
      var params  = Array.prototype.slice.call(arguments, 1);
      return function() {
        	return fn.apply(this, params.concat(Array.prototype.slice.call(arguments, 0)));
      }
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {
      
  }
};
