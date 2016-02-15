exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
     return arr.indexOf(item);
  },

  sum : function(arr) {
      var i = 0, sum = 0;
      for( i = 0; i< arr.length; i++){
          sum = sum + arr[i];
      }
      return sum;
  },

  remove : function(arr, itemToRemove) {
      var removed = arr.filter(function(item, index){
    	  return itemToRemove != item;
      });
    
    return removed;
  },

  removeWithoutCopy : function(arr, item) {
      var i;
		  for(i = 0; i < arr.length; i++){
    		if(arr[i] === item){
        		arr.splice(i, 1);
        }
    }
    return arr;
  },

  append : function(arr, item) {
        arr.push(item);
        return arr;
  },

  truncate : function(arr) {
      arr.pop(arr.indexOf(arr.length-1));
      return arr;
  },

  prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
  },

  curtail : function(arr) {
     arr.pop(arr.indexOf(arr[0]));
     return arr;
  },

  concat : function(arr1, arr2) {
        var mergedArr = arr1.concat(arr2);
        return mergedArr;
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {
      var i, duplicates = [];
      for( i = 0; i < arr.length; i++){
            if(arr[i+1] === arr[i]){
                duplicates.push(arr[i]);
            }
      }
      
      return duplicates;
  },

  square : function(arr) {
     
  },

  findAllOccurrences : function(arr, target) {

  }
};
