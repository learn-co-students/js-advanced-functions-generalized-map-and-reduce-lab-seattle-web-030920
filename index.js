// Add your functions here
const map = (arr, func) => {
    let result = []
    for(let el of arr){
        result.push(func(el))
    }
    return result
}

const reduce = (arr, func, start=0) => {
    let result = start
    for (let i = 0; i < arr.length; i++) {
        result = result + func(arr[i])
    }
    return result
}