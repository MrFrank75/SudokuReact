import React from 'react';
import './SudokuGrid.css';

class SudokuGrid extends React.Component{     
    render() {
        const numbers = this.props;
        return (
            <div className="SudokuGrid">
                <div>
                    <div className="ninebyninegrid">{numbers[0]} </div>
                    <div className="ninebyninegrid">{numbers[1]} </div>
                    <div className="ninebyninegrid">{numbers[2]} </div>
                </div>
                <div>
                    <div className="ninebyninegrid">{numbers[3]} </div>
                    <div className="ninebyninegrid">{numbers[4]} </div>
                    <div className="ninebyninegrid">{numbers[5]} </div>
                </div>
                <div>
                    <div className="ninebyninegrid">{numbers[6]} </div>
                    <div className="ninebyninegrid">{numbers[7]} </div>
                    <div className="ninebyninegrid">{numbers[8]} </div>
                </div>
            </div>
        );
    }
}

export default SudokuGrid;