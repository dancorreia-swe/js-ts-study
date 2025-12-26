// Big O notation

function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
