function map(arr, callback){
    let nuArr = []
    for (let i = 0; i<arr.length; i++){
        let ele = arr[i]
        nuArr.push(callback(ele))
    }
    return nuArr
}

function reduce(arr, callback, start){
    let sum = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for (; i<arr.length; i++){
        let ele = arr[i]
        nuArr.push(callback(ele, start))
    }
    return sum
}