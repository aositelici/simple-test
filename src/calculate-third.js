function even_group_calculate_average(arr) {
  var evenArray = getEvenArray(arr);
  var groups = getGroups(evenArray);
  return calculateAverage(groups);
}

function getEvenArray(array) {
  var evenArray = array.filter(function(item, i) {
    return i % 2 !== 0;
  })
  .filter(function(item, i) {
    return item % 2 === 0;
  });

  if(evenArray.length === 0) {
    evenArray.push(0);
  }
  return evenArray;
}

function calculateAverage(groups) {
  var result = [];
  groups.forEach(function(group) {
      var length = group.length;
      var sum = group.reduce(function(a, b) {
        return a + b;
      });
      result.push(sum/length);
  });
  return result;
}

function getGroups(evenArray) {
  var groups = [[], [], []];
  evenArray.forEach(function(item) {
    groups[item.toString().length - 1].push(item);
  });

  var filterGroups = groups.filter(function(group) {
    return (group.length !== 0);
  });
  return filterGroups;
}
