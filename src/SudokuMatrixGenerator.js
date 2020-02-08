import React from 'react';

class SudokuMatrixGenerator extends React.Component{

    ExtractTinyMatrix3by3fromBigListOfArray(listOfHorizontalVectors, idxSectorToConvert)
    {
        var sudokuBlock = [];
       
        for (let index = 0; index < listOfHorizontalVectors[idxSectorToConvert].length; index++) {

            var idxStartColumn = (idxSectorToConvert*3) % 9;
            var idxColumn = (index % 3) + idxStartColumn;
            
            var idxStartRow = Math.trunc(idxSectorToConvert / 3) *3;
            var idxRow = Math.trunc(index / 3)  + idxStartRow;

            sudokuBlock[index] = listOfHorizontalVectors[idxRow][idxColumn];
        }

        return sudokuBlock;
    }

    PlaceRowAndColumn(arrayToPlace, listOfHorizontalVectors, columnToPlace, rowToPlace, rowsToGenerate)
    {
            
        if (arrayToPlace.length===0){
            if (rowToPlace < rowsToGenerate-1)
            {
                console.log("Placing row " + (rowToPlace+1));
                var nextArrayToPlace = getRowRandomNumbers();
                listOfHorizontalVectors[rowToPlace+1] = [];
                return this.PlaceRowAndColumn(nextArrayToPlace, listOfHorizontalVectors,0, rowToPlace+1, rowsToGenerate);
            }
            return true;
        } 
       
       
        var nextNumberIsPlaced = false;
        for (var idxArrayToPlace=0; idxArrayToPlace< arrayToPlace.length; idxArrayToPlace++)
        {
            //for this column
            //take the number to place from the array of remaining numbers
            var numToPlace = arrayToPlace[idxArrayToPlace];
            var numberAlreadyPresent = false;
            
            //check every row in the same column until now
            var idxPreviousRow = 0;
            while ((!numberAlreadyPresent) && (idxPreviousRow < rowToPlace)) {
                var elementToCheck = listOfHorizontalVectors[idxPreviousRow][columnToPlace];
                if (elementToCheck === numToPlace)
                    {numberAlreadyPresent = true;}
                idxPreviousRow++;
            }
            
            //place the number if checks are successful
            if (!numberAlreadyPresent){
                listOfHorizontalVectors[rowToPlace][columnToPlace] = numToPlace;
                
                // make a new array smaller
                var smallerArray = [];
                var idxSmallerArray = 0;
                for (let index = 0; index < arrayToPlace.length; index++) {
                    if (index!==idxArrayToPlace){
                        smallerArray[idxSmallerArray] = arrayToPlace[index];
                        idxSmallerArray++;
                    }
                }

                //place the remaining numbers
                nextNumberIsPlaced = this.PlaceRowAndColumn(smallerArray, listOfHorizontalVectors, columnToPlace+1, rowToPlace, rowsToGenerate);
            }

            //if the next placements didn't work out with the number we took, let's try another number
            if(nextNumberIsPlaced === true)
                break;
            idxArrayToPlace++;
        }

        return nextNumberIsPlaced;
    }

    generateMatrix9by9 = async (event) => {
        event.preventDefault();

        console.log("Entering 9by9 matrix generation")
        var listOfHorizontalVectors = [];
     
        //place all the rows and columns
        const rowsToGenerate = 9;
        var placedEverything = this.PlaceRowAndColumn([],listOfHorizontalVectors, 0, -1, rowsToGenerate);

        var squareArray = [];
        for (let sudokuBlock = 0; sudokuBlock < rowsToGenerate; sudokuBlock++) {
            squareArray[sudokuBlock] = this.ExtractTinyMatrix3by3fromBigListOfArray(listOfHorizontalVectors, sudokuBlock)
        }
                
        this.props.matrixGenerationHandler([
            squareArray[0],
            squareArray[1],
            squareArray[2],
            squareArray[3],
            squareArray[4],
            squareArray[5],
            squareArray[6],
            squareArray[7],
            squareArray[8]]);
    }
    
    render(){
        return (
            <div>
            <form action="" onSubmit={this.generateMatrix9by9}>
                <button>Generate Matrix</button>
            </form>
            </div>
            );
     }
}

export default SudokuMatrixGenerator

function getRowRandomNumbers() {
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
