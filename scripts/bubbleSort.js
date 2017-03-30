export const bubbleSort = array => {

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {

      if (array[j] < array[j - 1]) {

        //swap
        let temp = array[j]

        array[j] = array[j - 1]

        array[j - 1] = temp

    // console.log(array)
      }
    }
  }
  return array
}
