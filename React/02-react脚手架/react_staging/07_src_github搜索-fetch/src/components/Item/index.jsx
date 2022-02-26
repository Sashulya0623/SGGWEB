import React, { Component } from 'react';

import './index.css'

export default class Item extends Component {
  render() {
    const {userObj} = this.props;
    return (
        <div className="card">
            <a href={userObj.html_url} target="_blank" rel="noreferrer">
              <img alt='profile' src={userObj.avatar_url} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{userObj.login}</p>
        </div>
    )
  }
}
