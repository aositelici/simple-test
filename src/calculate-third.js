function even_group_calculate_average(arr) {
  var evenArray = getEvenArray(arr);
  var groups = getGroups(evenArray);
  return calculateAverage(groups);
}

function getEvenArray(array) {
  return array.filter(function(item, i) {
    return i % 2 !== 0;
  }).filter(function(item, i) {
    return item % 2 === 0;
  });
}

function calculateAverage(groups) {
  var result = [];
  for(var i in groups) {
    var average = groups[i].reduce(function(a, b) {
      return a + b;
    })/groups[i].length;

    result.push(average);
  }
  return result.length ? result : [0];
}

function getGroups(evenArray) {
  return evenArray.reduce(function(p, c) {
    var length = c.toString().length;
    p[length] = p[length] || [] ;
    p[length].push(c);
    return p;
  }, {});
}
