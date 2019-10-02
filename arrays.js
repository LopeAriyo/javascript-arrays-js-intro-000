var  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


var addElementToBeginningOfArray = function(array, element){

  FirstArray = [element, ...array]
  return FirstArray

}

var destructivelyAddElementToBeginningOfArray = function(array, element){

  array.unshift(element)
  return array

}

var addElementToEndOfArray = function(array, element) {
  SecondArray = [...array, element]
  return SecondArray
}

var destructivelyAddElementToEndOfArray = function (array, element) {

  array.push(element)
  return array

}

var accessElementInArray = function (array, index){

return array[index];

 }

 var destructivelyRemoveElementFromBeginningOfArray = function (array){
   array.shift()
   return array
 }


 var removeElementFromBeginningOfArray = function (array){

   ThirdArray = array.slice(1)
   return ThirdArray
 }

 /*
 Define a function in arrays.js called removeElementFromBeginningOfArray. It
 takes an array as its only argument. The function should remove the first
 element in the array. This function should return the entire array in the same
 line, and it should not mutate the original array.
 */

 var destructivelyRemoveElementFromEndOfArray = function (array){

   array.pop()
   return array
 }

 var removeElementFromEndOfArray = function (array){

   array.pop()
   return array
 }
