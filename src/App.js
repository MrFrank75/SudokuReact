import React from 'react';
import SudokuGridContainer from './SudokuGridContainer';
import SudokuMatrixGenerator from './SudokuMatrixGenerator';

import './App.css';

class App extends React.Component{
  
  state = {
    initialSudokuMatrix : []
  }

  generateInitialMatrix = (sudokuMatrix) =>{
    console.log(this.state.repos);
    this.setState(prevState => ({
      initialSudokuMatrix : sudokuMatrix
    }))
    
  }

  render(){
     return (
      <div className="App-header">
        {this.props.title} 
        <SudokuMatrixGenerator matrixGenerationHandler = {this.generateInitialMatrix} />
        <SudokuGridContainer sudokuMatrix={this.state.initialSudokuMatrix} />
      </div>
     );
  }
}

export default App;
