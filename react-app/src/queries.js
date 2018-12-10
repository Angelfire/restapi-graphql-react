import gql from 'graphql-tag';

export const USERS = gql`
{ 
  Users {
    id
    name
    username
  }
}
`;
