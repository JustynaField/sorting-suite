import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort'


describe('TDD with insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should sort an array of numbers', () => {
    let array = [5, 1, 4, 2, 3]

    assert.deepEqual(insertionSort(array), [1, 2, 3, 4, 5])
  })

  

})
