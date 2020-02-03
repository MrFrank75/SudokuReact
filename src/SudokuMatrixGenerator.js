import React from 'react';

class SudokuMatrixGenerator extends React.Component{

    generateMatrix = async (event) => {
        event.preventDefault();
        this.props.matrixGenerationHandler([[11,22,38],[44,55,66],[77,88,98],4,5,6,7,8,99])
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