function breakOut(array, changeValue, stopValue) {
  for (let i =0; i < array.length; i++) {
    if(array[i] == stopValue)
    break 
  }

}


function firstNotEqual(array, value) {
  for (let i = 0; i < array.length; i++) {
    debugger
    if (array[i] !== value) {
      return array[i]
    }
  }
}
