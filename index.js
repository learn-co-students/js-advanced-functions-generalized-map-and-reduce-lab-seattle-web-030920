// Add your functions here
function map(arr, func) {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        newArr.push(func(arr[index]))
    }
    return newArr
}

function reduce(arr, func, start) {
    let value = !!start ? start : arr[0]
    let index = !!start ? 0 : 1
    for (; index < arr.length; index++) {
        value = func(arr[index], value)
    }
    return value
}
