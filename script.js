
// задача №1
const fill = (arraySize, value) => {
  let arr = [];
  while(arraySize !== 0) {
    arr.push(value);
    arraySize -= 1;
  }
  return arr;
};

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill))

// задача №2
const reverse = (array1) => {
  let arr = []
  for (const index1 of array1){
    arr.unshift(index1)
  }
  return arr;
 };

const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]

// задача №3
const compact = (array2) => {
  let arr = []
  for (const index2 of array2) {
    if (index2 === 0 || index2 === null || index2 === undefined || index2 === NaN || index2 === false || index2 === ''){
      continue
    }
    else{
      arr.push(index2)
    }
  }
  return arr
};

const data3 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data3)) // [1, 2, 3]
