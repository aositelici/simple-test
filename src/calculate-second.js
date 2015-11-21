function calculate_median(arr) {
  var result = 0;
  var newArr = arr.filter(function(item, i) {
    return i%2 !== 0;
  });

  if (newArr.length%2 ===1) {
    newArr.sort();
    result = newArr[(newArr.length-1)/2];
  } else {
    newArr.sort();
    result = (newArr[(newArr.length+1)/2]+newArr[(newArr.length+1)/2-1])/2;
    console.log(newArr[(newArr.length-1)/2]);
  }
  return result;
}
