let arr = [2, 1, 6, 5, 8];

function deletes(array, del) {
  array.splice(array.indexOf(del), 1);
  return array;
}

console.log(deletes(arr, 6));
