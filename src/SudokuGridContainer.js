import React from 'react';
import './SudokuGridContainer.css';
import SudokuGrid from './SudokuGrid';

class SudokuGridContainer extends React.Component
{
    render(){
        return(
            <div>
                <div className="SudokuGridContainerSingleLine" >
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
                        <SudokuGrid ></SudokuGrid>
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