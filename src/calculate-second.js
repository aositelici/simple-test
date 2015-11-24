function calculate_median(arr) {
  var result = 0;
  var newArr = arr.filter(function(item, i) {
    return i % 2 !== 0;
  }).sort(function(a,b) {
    return a - b;
  });

  if (newArr.length % 2 === 1) {
    result = newArr[(newArr.length-1) / 2];
  } else {
    result = (newArr[(newArr.length) / 2] + newArr[(newArr.length) / 2 - 1]) / 2;
  }

  return result;
}
