import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Users = () => (
  <Query query={gql`
    { 
      Users {
        id
        name
        username
      }
    }
  `}>
    {({loading, error, data}) => {
      if(loading) return <p>Loading...</p>;
      if(error) return <p>Error</p>;
      
      return (
        <ul>
          { data.Users.map(user => <li key={ user.id }>{ user.name } - { user.username }</li>) }
        </ul>
      )
    }}
  </Query>
);

export default Users;