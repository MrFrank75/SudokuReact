import React from 'react';

class SudokuMatrixGenerator extends React.Component{

    generateMatrix = async (event) => {
        event.preventDefault();

        var initialArray = [1,2,3,4,5,6,7,8,9];
        var grid = [];
        var maxElementsToPrefill = 9;

        for (let index = 0; index < maxElementsToPrefill; index++) {
            //pick an item contained in the array
            var idxNextItemToPick = (Math.trunc(Math.random() * 10)) % initialArray.length;   
            grid.push(initialArray[idxNextItemToPick]);
            
            //build a new smaller array
            var newInitializationArray = [];
            for (let index = 0; index < initialArray.length; index++) {
                if (index!==idxNextItemToPick){
                    newInitializationArray.push(initialArray[index]);
                }
            }
            initialArray = newInitializationArray;
        }
        
        console.log(grid);
        this.props.matrixGenerationHandler([grid,[44,55,66],[77,88,98],4,5,6,7,8,99])
    }

    render(){
        return (
            <div>
            <form action="" onSubmit={this.generateMatrix}>
                <button>Generate Matrix</button>
            </form>
            </div>
            );
     }
}

export default SudokuMatrixGenerator