import React from 'react';
import './SudokuGrid.css'

class SudokuGrid extends React.Component{
    render() {
        const profile = this.props;
        return (
            <div classname="ninebyninegrid">
                {/* <div className="github-profile-info">
                    <div className="gridEle">{profile.name}</div>
                    <div className="github-profile-company">{profile.company}</div>
                </div> */}
            </div>
        );
    }
}

export default SudokuGrid;