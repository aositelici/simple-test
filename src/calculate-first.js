function single_element(arr) {
  var result = [];
  var newArr = arr.filter(function (item, i) {
    return i%2 !== 0;
  });

  var repeatArray = [];
  newArr.forEach(function (item){
    result.indexOf(item) === -1 ? result.push(item) : repeatArray.push(item);
  });

  repeatArray.forEach(function (item){
    var index = result.indexOf(item);
    if(index !== -1) {
      result.splice(index,1);
    }
  });

  return result;
}
