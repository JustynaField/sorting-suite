let array = [5, 2, 7, 4, 6]

const insertionSort = (array) => {

  for (let i = 0; i < array.length; i++) {

    let temp = array[i]
    let j = i-1

    while(j>=0 && temp < array[j]){
      array[j]= array[j+1]
    }
    array[j+1] = temp

  }
  return array
}




// const insertionSort = (array) => {
//
//   let orderedArray = []
//
//
//   for (let i = 0; i < array.length; i++) {
//
//     let orderedArrLength = orderedArray.length
//     let currentItem = array[i]
//
//     if (orderedArrLength === 0) {
//       orderedArray.splice(0, 0, currentItem)
//     } else {
//       for (let j = 0; j < orderedArrLength; j++) {
//
//         if (currentItem < orderedArray[j]) {
//           orderedArray.splice(j, 0, currentItem)
//           break
//         }
//       }
//     }
//   }
//   return orderedArray
// }

export default insertionSort
