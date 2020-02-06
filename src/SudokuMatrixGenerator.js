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

    PlaceColumn(arrayToPlace, listOfHorizontalVectors, columnToPlace, rowToPlace)
    {
        console.log("Placing column " + columnToPlace);
        if (arrayToPlace.length===0)
            return true;


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
            
            //place the number if wasn't there
            if (!numberAlreadyPresent){
                listOfHorizontalVectors[rowToPlace][columnToPlace] = numToPlace;
                
                // make a new array smaller
                arrayToPlace.splice(idxArrayToPlace,1);
                //place the remaining numbers
                return this.PlaceColumn(arrayToPlace, listOfHorizontalVectors, columnToPlace+1, rowToPlace);
            }
            idxArrayToPlace++;
        }
        return false;
    }

    generateMatrix9by9 = async (event) => {
        event.preventDefault();

        console.log("Entering 9by9 matrix generation")
        var listOfHorizontalVectors = [];
       
        //first row, we just fill up, no costraints
        var firstRow = getRowRandomNumbers();
        listOfHorizontalVectors[0] = firstRow;
        
        //place all the rows
        for (let row = 1; row < 9; row++) {
            console.log("Placing row " + row);
            listOfHorizontalVectors[row] = [];
            var numbersToPlace = getRowRandomNumbers();

            this.PlaceColumn(numbersToPlace,listOfHorizontalVectors, 0, row);

            // //place all the columns
            // for (let column = 0; column < 9; column++) {
            //     console.log("Placing column " + column);
            
            //     //for each column
            //     //scan the numbers to place
            //     var numHasBeenPlaced = false;
            //     var idxNumToPlace = 0;
            //     while (!numHasBeenPlaced && idxNumToPlace <9) {
            //         var numToPlace = numbersToPlace[idxNumToPlace];
            //         var numberAlreadyPresent = false;
    
            //         //check every row in the same column until now
            //         var idxPreviousRow = 0;
            //         while ((!numberAlreadyPresent) && (idxPreviousRow < row)) {
            //             var elementToCheck = listOfHorizontalVectors[idxPreviousRow][column];
            //             if (elementToCheck === numToPlace)
            //                 {numberAlreadyPresent = true;}
            //             idxPreviousRow++;
            //         }
                    
            //         //place the number if wasn't there
            //         if (!numberAlreadyPresent){
            //             listOfHorizontalVectors[row][column] = numToPlace;
            //             numHasBeenPlaced = true;
            //         }
            //         idxNumToPlace++;
            //     }
            // }
        }

        var squareArray = [];
        for (let sudokuBlock = 0; sudokuBlock < 9; sudokuBlock++) {
            squareArray[sudokuBlock] = this.ExtractTinyMatrix3by3fromBigListOfArray(listOfHorizontalVectors, sudokuBlock)
        }
                
        this.props.matrixGenerationHandler([squareArray[0],squareArray[1],squareArray[2],squareArray[3],
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
