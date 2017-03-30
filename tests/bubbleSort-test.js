import {bubbleSort} from '../scripts/bubbleSort'
import {assert} from 'chai'

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should sort an array of letters', () => {
    let array = ["d", "f", "b", "a", "c", "e"]

    assert.deepEqual(bubbleSort(array), ["a", "b", "c", "d", "e", "f"]);
  })

  it('should sort an array of numbers', () => {
    let array = [4, 5, 2, 7, 3, 1, 6]

    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5, 6, 7])
  })

  it('should sort an array of negative numbers', () => {
    let array = [-4, -5, -2, -7, -3, -1, -6]

    assert.deepEqual(bubbleSort(array), [-7, -6, -5, -4, -3, -2, -1])
  })

  it('should sort an array that contains both positive and negative values', () => {
    let array = [5, -7, 2, -3, -1, 4, 0]

    assert.deepEqual(bubbleSort(array), [-7, -3, -1, 0, 2, 4, 5])
  })

  it('should sort an array when there are duplicate numbers inside the array', () => {
    let array = [3, 5, 5, 2, 9, 2]

    assert.deepEqual(bubbleSort(array), [2, 2, 3, 5, 5, 9])
  })

  it('should sort an array when there are duplicate letters inside the array', () => {
    let array = ["b", "z", "a", "m", "e", "a", "b"]

    assert.deepEqual(bubbleSort(array), ["a", "a", "b", "b", "e", "m", "z"])
  })

  it('should not break when there is an empty array', () => {
    let array = []

    assert.deepEqual(bubbleSort(array), [])
  })

  it('should not break if array is already sorted', () => {
    let array = [1, 2, 3, 4, 5]

    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5])
  })

  it('should not break if there is only one item in the array',  () => {
    let array = [1]

    assert.deepEqual(bubbleSort(array), [1])
  })

  it('should sort words alphabetically', () => {
    let array = ["sugar", "bread", "potatoes", "eggs", "milk"]

    assert.deepEqual(bubbleSort(array), ["bread", "eggs", "milk", "potatoes", "sugar"])
  })

  it('should sort phrases alphabetically', () => {
    let array = ["sweet dreams", "fish & chips", "milk and honey"]

    assert.deepEqual(bubbleSort(array), ["fish & chips", "milk and honey", "sweet dreams"])
  })

})
