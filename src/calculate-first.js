function single_element(arr) {
  return arr.filter(function(item, i) {
    return i % 2 !== 0;
  })
  .filter(function(item, i, evenArray) {
    return evenArray.indexOf(item) === evenArray.lastIndexOf(item);
  });
}
