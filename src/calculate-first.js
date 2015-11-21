function single_element(arr) {
  var result = [];
  var newArr = arr.filter(function(item, i) {
    return i%2 !== 0;
  });
  //result.push(newArr[0]);
  newArr.forEach(function(item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }else {
      for(var i =0;i<result.length;i++) {
        if(result[i] === item) {
          result.splice(i,1);
        }
      }
    }
  });

  return result;
}
