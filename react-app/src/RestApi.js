import React, { Component } from 'react';
import axios from 'axios';

class RestApi extends Component {
  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/users')
      .then(res => {
        const users = res.data;
        this.setState({ users: users.data, isLoading: false });
      })
  } 

  render() {
    const { users, isLoading } = this.state;
    
    return (
      <div className="restapi">
        <h2>REST API Data</h2>
        <ul>
        { !isLoading ? users.map(user => <li key={user.id}>{user.name} - {user.email}</li>) : <p>Loading</p> }
        </ul>
      </div>
    );
  }

}

export default RestApi;
