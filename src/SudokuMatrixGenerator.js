import React from 'react';
import {getRowRandomNumbers} from './SudokuMatrixGeneratorHelper'
import {removeElementFromArray} from './SudokuMatrixGeneratorHelper'
import {IsSafeToPlace} from './SudokuMatrixGeneratorHelper'


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

    PlaceRowAndColumn(numbersToPlaceForCurrentRow, grid, columnToPlace, rowToPlace, rowsToGenerate)
    {
        //check if we need to create a new row
        if (numbersToPlaceForCurrentRow.length===0){
            if (rowToPlace < rowsToGenerate-1)
            {
                console.log("Placing row " + (rowToPlace+1));
                var nextArrayToPlace = getRowRandomNumbers();
                grid[rowToPlace+1] = [];
                return this.PlaceRowAndColumn(nextArrayToPlace, grid,0, rowToPlace+1, rowsToGenerate);
            }
            return true;
        } 
       
        //check among the numbers to place one that is Safe to place. Place it and move to the next recursively
        var nextNumberIsPlaced = false;
        for (var idxNumberToPlace=0; idxNumberToPlace< numbersToPlaceForCurrentRow.length; idxNumberToPlace++)
        {
            var numAttemptingToPlace = numbersToPlaceForCurrentRow[idxNumberToPlace];
            if (IsSafeToPlace(grid,rowToPlace,columnToPlace, numAttemptingToPlace)){
                grid[rowToPlace][columnToPlace] = numAttemptingToPlace;
                var remainingNumbers = removeElementFromArray(numbersToPlaceForCurrentRow, idxNumberToPlace);
                nextNumberIsPlaced = this.PlaceRowAndColumn(remainingNumbers, grid, columnToPlace+1, rowToPlace, rowsToGenerate);
            }

            //if the next placements didn't work out with the number we took, let's try another number
            if(nextNumberIsPlaced === true)
                break;
            idxNumberToPlace++;
        }

        return nextNumberIsPlaced;
    }

    generateMatrix9by9 = async (event) => {
        event.preventDefault();

        console.log("Entering 9by9 matrix generation")
        var listOfHorizontalVectors = [];
     
        //place all the rows and columns
        const rowsToGenerate = 9;
        this.PlaceRowAndColumn([],listOfHorizontalVectors, 0, -1, rowsToGenerate);

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


