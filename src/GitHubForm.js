import React from 'react';
import axios from 'axios';
import './GitHubForm.css';

class GitHubForm extends React.Component{
   
    state ={
        usernameRef : '',
        orgIdRef :'',
        authorizationTokenRef :'',   
    }
    
    
    handleSubmitGetRepos = (event) => {
        event.preventDefault();
        const AuthStr = 'Bearer '.concat(this.state.authorizationTokenRef); 
        axios.get('https://api.github.com/organizations/35495351/repos?page=1', { headers: { Authorization: AuthStr } })
         .then(response => {
             // If request is good...
             this.props.repoListHandler(response.data)
          })
         .catch((error) => {
             console.log('error ' + error);
          });
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.usernameRef}`)
        this.props.profileHandler(response.data)
    }
    render() {
        return (
            <div className="GitHubForm"> 
                <div>
                <form action="" onSubmit={this.handleSubmitGetRepos}>
                    <input type="text" placeholder="Organization ID" value={this.state.orgIdRef} onChange={event=>this.setState({orgIdRef:event.target.value})}></input>
                    <input type="text" placeholder="Token" value={this.state.authorizationTokenRef} onChange={event=>this.setState({authorizationTokenRef:event.target.value})} ></input>
                    <button>Get Repos</button>
                </form>
                </div>
                <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="GitHubUsername" value={this.state.usernameRef} onChange={event=>this.setState({usernameRef:event.target.value})} ></input>
                        <button>Add Card</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default GitHubForm