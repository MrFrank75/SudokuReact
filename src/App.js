import React from 'react';
import SudokuGrid from './SudokuGrid';

import './App.css';

// import Card from './Card';
// import GitHubForm from './GitHubForm';

// const CardList = (props) => (
// <div>
//   {props.profiles.map(profile => <Card {...profile}/>)}
// </div>
// )

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
        <SudokuGrid />
        {/* <GitHubForm profileHandler={this.addNewProfile} repoListHandler={this.addRepoList}/>
        <CardList profiles={this.state.profiles} /> */}
      </div>
     );
  }
}

export default App;
