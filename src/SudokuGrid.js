import React from 'react';
import './SudokuGrid.css';

class SudokuGrid extends React.Component{
    render() {
        // const profile = this.props;
        return (
            <div>
                <div>
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                </div>
                <div>
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                </div>
                <div>
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                    <div className="ninebyninegrid" />
                </div>
            </div>
        );
    }
}

export default SudokuGrid;