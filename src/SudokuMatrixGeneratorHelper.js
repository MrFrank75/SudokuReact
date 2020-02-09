export const getRowRandomNumbers = () => {
    var initialArray = [1,2,3,4,5,6,7,8,9];        
    var randomNumbersRow = [];

    for (let index = 0; index < 9; index++) {
        //pick an item contained in the array
        var idxNextItemToPick = (Math.trunc(Math.random() * 10)) % initialArray.length;
        randomNumbersRow.push(initialArray[idxNextItemToPick]);
        //build a new smaller array
        var newInitializationArray = [];
        for (let index = 0; index < initialArray.length; index++) {
            if (index !== idxNextItemToPick) {
                newInitializationArray.push(initialArray[index]);
            }
        }
        initialArray = newInitializationArray;
    }
    return randomNumbersRow;
}

export const removeElementFromArray = (arrayToReduce, idxToRemove) =>{
    var smallerArray = [];
    var idxSmallerArray = 0;
    for (let index = 0; index < arrayToReduce.length; index++) {
        if (index!==idxToRemove){
            smallerArray[idxSmallerArray] = arrayToReduce[index];
            idxSmallerArray++;
        }
    }
    return smallerArray;
}

export const IsSafeToPlace = (gridToCheck,placingRow, placingCol, numToPlace) => {
    var isSafeToPlace = true;            
    //check every row in the same column until now
    var idxPreviousRow = 0;
    while ((isSafeToPlace) && (idxPreviousRow < placingRow)) {
        var elementToCheck = gridToCheck[idxPreviousRow][placingCol];
        if (elementToCheck === numToPlace)
            {isSafeToPlace = false;}
        idxPreviousRow++;
    }         
    return isSafeToPlace;
}