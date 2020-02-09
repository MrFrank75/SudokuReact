import React from 'react';
import './SudokuGridContainer.css';
import SudokuGrid from './SudokuGrid';

class SudokuGridContainer extends React.Component
{
    render(){
        return(
            <div>
                <div className="SudokuGridContainerSingleLine" >
                        <SudokuGrid {...this.props.sudokuMatrix[0]} ></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[1]}></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[2]}></SudokuGrid>
                </div>
                <div className="SudokuGridContainerSingleLine">
                <SudokuGrid {...this.props.sudokuMatrix[3]} ></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[4]}></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[5]}></SudokuGrid>
                </div>
                <div className="SudokuGridContainerSingleLine">
                <SudokuGrid {...this.props.sudokuMatrix[6]} ></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[7]}></SudokuGrid>
                        <SudokuGrid {...this.props.sudokuMatrix[8]}></SudokuGrid>
                </div>
            </div>
        )
    }
}

export default SudokuGridContainer