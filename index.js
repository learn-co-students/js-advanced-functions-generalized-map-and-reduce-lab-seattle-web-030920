function map(arrayInput, blockInput)
{
    let returnArray = []
    for(let i = 0; i < arrayInput.length; i++)
    {
        returnArray[i] = blockInput(arrayInput[i]);
    }
    return returnArray;
}

function reduce(arrayInput, blockInput, startingValue)
{
    let returnValue = arrayInput[0];
    let startIndex = 1;    
    if(startingValue)
    {
        returnValue = startingValue;
        startIndex = 0;
    }    
    for(let i = startIndex; i < arrayInput.length; i++)
    {        
        returnValue = blockInput(arrayInput[i], returnValue)        
    }
    return  returnValue;
}
