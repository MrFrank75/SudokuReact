import React from 'react';
import './SudokuGridContainer.css';
import SudokuGrid from './SudokuGrid';

class SudokuGridContainer extends React.Component
{
    state = {
        matrix: [[11,22,33],[44,55,66],[77,88,99],4,5,6,7,8,9]
    }

    render(){
        return(
            <div>
                <div className="SudokuGridContainerSingleLine" >
                        <SudokuGrid {...this.state.matrix[0]} ></SudokuGrid>
                        <SudokuGrid {...this.state.matrix[1]}></SudokuGrid>
                        <SudokuGrid {...this.state.matrix[2]}></SudokuGrid>
                </div>
                <div className="SudokuGridContainerSingleLine">
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
                </div>
                <div className="SudokuGridContainerSingleLine">
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
                </div>
            </div>
        )
    }
}

export default SudokuGridContainer