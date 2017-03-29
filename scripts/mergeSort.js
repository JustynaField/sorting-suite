const mergeSort = (array) => {

  let middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle + 1, array.length)

  return merge (mergeSort(left), mergeSort(right))

}

function merge (left, right) {

  let sortedArray = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  while (left.length) {
    sortedArray(left.shift())
  }

  while (right.length) {
    sortedArray(right.shift())
  }

  return sortedArray


  // return sortedArray.concat(rightArray.concat(leftArray))

}


module.exports = mergeSort
