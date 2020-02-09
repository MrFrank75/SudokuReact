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

export const ExtractSectorFromMatrix = (gridOfNumbers, idxSectorToConvert) => {
        var sudokuBlock = [];
        var sizeOfGrid = 9;

        var idxStartRow = Math.trunc(idxSectorToConvert / 3) *3;
        var idxStartColumn = (idxSectorToConvert%3) *3;
        
        for (let index = 0; index < sizeOfGrid; index++) {
            var idxRow = Math.trunc(index / 3)  + idxStartRow;
            var idxColumn = (index % 3) + idxStartColumn; 
            sudokuBlock[index] = 0;

            if ((gridOfNumbers.length>idxRow)){
                if (gridOfNumbers[idxRow].length > idxColumn) {
                    sudokuBlock[index] = gridOfNumbers[idxRow][idxColumn];
                }
            }
        }
        return sudokuBlock;
}

function GetSectorZeroBasedFromPlacingRowCol(placingRow, placingCol)
{
    var sectRowTemp = Math.trunc(placingRow / 3) * 3; //can be 0, 3,6
    var sectColTemp = Math.trunc(placingCol / 3); // can be 0,1,2
    return (sectRowTemp + sectColTemp);
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
    
    //check the block related to the row/col we are placing
    if (isSafeToPlace===true)
    {
        var sectorToCheck = GetSectorZeroBasedFromPlacingRowCol(placingRow, placingCol) 
        var sectorMatrix = ExtractSectorFromMatrix(gridToCheck , sectorToCheck); 
    
        for (let index = 0; index < sectorMatrix.length; index++) {
            if (sectorMatrix[index] === numToPlace)
            {
                isSafeToPlace = false;
                break;
            }
        }
    }

    return isSafeToPlace;
}