import React from 'react';
import './Card.css'

class Card extends React.Component{
    render() {
        const profile = this.props;
        return (
            <div classname="github-profile">
                <img width="75px" className="github-profile-img" src={profile.avatar_url} />
                <div className="github-profile-info">
                    <div className="github-profile-name">{profile.name}</div>
                    <div className="github-profile-company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;