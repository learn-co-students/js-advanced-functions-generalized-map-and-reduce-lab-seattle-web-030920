// Add your functions here
  function map(array, func){
    let r = []
    for (let i = 0; i < array.length; i++ ) {
      r.push(func(array[i]))
    }
    return r
   }

function reduce (sourceArray,func, startingPoint=0){
    let n = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < sourceArray.length; i++ ) {
       n= func(sourceArray[i], n)
    }
    return n
}