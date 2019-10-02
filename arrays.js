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
