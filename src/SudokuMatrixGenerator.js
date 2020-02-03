import React from 'react';

class SudokuMatrixGenerator extends React.Component{

    FromGridToSquareArray(grid, intBlock)
    {
        return [3,4,5,6,7,8,9,10,11];
    }


    generateMatrix9by9 = async (event) => {
        event.preventDefault();

        console.log("Entering 9by9 matrix generation")
        var grid = [];
       
        //first row, we just fill up, no costraints
        var firstRow = getRowRandomNumbers();
        grid[0] = firstRow;
        
        //place all the rows
        for (let row = 1; row < 9; row++) {
            console.log("Placing row " + row);
            grid[row] = [];
            var numbersToPlace = getRowRandomNumbers();

            //place all the columns
            for (let column = 0; column < 9; column++) {
                console.log("Placing column " + column);
            
                //for each column
                //scan the numbers to place
                var numHasBeenPlaced = false;
                var idxNumToPlace = 0;
                while (!numHasBeenPlaced && idxNumToPlace <9) {
                    var numToPlace = numbersToPlace[idxNumToPlace];
                    var numberAlreadyPresent = false;
    
                    //check every row in the same column until now
                    var idxPreviousRow = 0;
                    while ((!numberAlreadyPresent) && (idxPreviousRow < row)) {
                        var elementToCheck = grid[idxPreviousRow][column];
                        if (elementToCheck === numToPlace)
                            {numberAlreadyPresent = true;}
                        idxPreviousRow++;
                    }
                    
                    if (!numberAlreadyPresent){
                        grid[row][column] = numToPlace;
                        numHasBeenPlaced = true;
                    }
                    idxNumToPlace++;
                }
            }
        
            var squareArray = [];
            for (let gridBlocks = 0; gridBlocks < 9; gridBlocks++) {
                squareArray[gridBlocks] = this.FromGridToSquareArray(grid, gridBlocks)
            }
                    
            this.props.matrixGenerationHandler([squareArray[0],[44,55,66],[77,88,98],4,5,6,7,8,99])
        }
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
