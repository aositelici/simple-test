function even_group_calculate_average(arr) {
  var result = [];
  var newArr = arr.filter(function(item, i) {
    return i % 2 !== 0;
  });

  var evenArray = newArr.filter(function(item, i) {
    return item % 2 === 0;
  });

  if(evenArray.length === 0) {
    evenArray.push(0);
  }

  var groups = [[], [], []];
  evenArray.forEach(function(item) {
    groups[item.toString().length - 1].push(item);
  });

  var filterGroups = groups.filter(function(group) {
    return (group.length !== 0);
  });
  filterGroups.forEach(function(group) {
      var length = group.length;
      group = group.reduce(function(a, b) {
        return a + b;
      });
      result.push(group/length);
  });

  return result;
}
