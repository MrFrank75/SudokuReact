import React from 'react';
import SudokuGridContainer from './SudokuGridContainer';

import './App.css';

class App extends React.Component{
  
//   state = {
//     repos : [],
//     profiles : [],
//   }

//   addRepoList = (repoList) =>{
//     this.setState(prevState => ({
//       repos : repoList
//     }))
//     console.log(this.state.repos);
//   }

//   addNewProfile = (gitHubProfile) =>{
//     console.log(gitHubProfile);
//     this.setState(prevState => ({
//       profiles : [...prevState.profiles, gitHubProfile]
//     }))
//   }

  render(){
     return (
      <div className="App-header">
        {this.props.title}
        <SudokuGridContainer />
      </div>
     );
  }
}

export default App;
