import React from 'react';
import {getRowRandomNumbers} from './SudokuMatrixGeneratorHelper'
import {removeElementFromArray} from './SudokuMatrixGeneratorHelper'
import {IsSafeToPlace} from './SudokuMatrixGeneratorHelper'
import {ExtractSectorFromMatrix} from './SudokuMatrixGeneratorHelper'

class SudokuMatrixGenerator extends React.Component{

    PlaceRowAndColumn(numbersToPlaceForCurrentRow, grid, columnToPlace, rowToPlace, rowsToGenerate)
    {
        //check if we need to create a new row
        if (numbersToPlaceForCurrentRow.length===0){
            if (rowToPlace < rowsToGenerate-1)
            {
                console.log("Placing row " + (rowToPlace+1));
                var nextArrayToPlace = getRowRandomNumbers();
                grid[rowToPlace+1] = [];
                var rowplaced = this.PlaceRowAndColumn(nextArrayToPlace, grid,0, rowToPlace+1, rowsToGenerate);
                return rowplaced;
            }
            return true;
        } 
       
        //check among the numbers to place one that is Safe to place. Place it and move to the next recursively
        var nextNumberIsPlaced = false;
        console.log("Placing (" + (rowToPlace+1) + "," + (columnToPlace) + ")");
        for (var idxNumberToPlace=0; idxNumberToPlace< numbersToPlaceForCurrentRow.length; idxNumberToPlace++)
        {
            console.log("(" + (rowToPlace+1) + "," + (columnToPlace) + ") Choosing among " + (numbersToPlaceForCurrentRow.length) + " numbers. Index:" + idxNumberToPlace);
            var numAttemptingToPlace = numbersToPlaceForCurrentRow[idxNumberToPlace];
            
            if (IsSafeToPlace(grid,rowToPlace,columnToPlace, numAttemptingToPlace)){
                grid[rowToPlace][columnToPlace] = numAttemptingToPlace;
                console.log("(" + (rowToPlace+1) + "," + (columnToPlace) + ") Placed number");
                var remainingNumbers = removeElementFromArray(numbersToPlaceForCurrentRow, idxNumberToPlace);
                nextNumberIsPlaced = this.PlaceRowAndColumn(remainingNumbers, grid, columnToPlace+1, rowToPlace, rowsToGenerate);
            }

            if (((idxNumberToPlace+1)===numbersToPlaceForCurrentRow.length) && (nextNumberIsPlaced === false)){
                console.log("Dead end for (" + (rowToPlace+1) + "," + (columnToPlace) + ")");
                grid[rowToPlace][columnToPlace] = 0;
            }
            
            //if the next placements didn't work out with the number we took, let's try another number
            if(nextNumberIsPlaced === true){
                break;
            }
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
            squareArray[sudokuBlock] = ExtractSectorFromMatrix(listOfHorizontalVectors, sudokuBlock)
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


