import React from 'react';
import './SudokuGrid.css';

class SudokuGrid extends React.Component{

    state = {
        numbers : [11,22,33,44,55,66,77,88,99]
    }

    render() {
        // const profile = this.props;
        return (
            <div>
                <div>
                    <div className="ninebyninegrid">{this.state.numbers[0]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[1]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[2]} </div>
                </div>
                <div>
                    <div className="ninebyninegrid">{this.state.numbers[3]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[4]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[5]} </div>
                </div>
                <div>
                    <div className="ninebyninegrid">{this.state.numbers[6]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[7]} </div>
                    <div className="ninebyninegrid">{this.state.numbers[8]} </div>
                </div>
            </div>
        );
    }
}

export default SudokuGrid;