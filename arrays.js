var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}
function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function addElementToEndOfArray(array, element){
  return [...array, element]
} 
// might have to delete code above

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop() 
}

function removeElementFromEndOfArray(array){
  return array.slic(0)
  
}



