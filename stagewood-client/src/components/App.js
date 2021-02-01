// import React, { useEffect, useState, Component } from 'react';
// import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
// import { useQuery, gql, graphql } from '@apollo/client';
// import Login from './Auth/Login';
// import Profile from './Profile';
// import Signup from './Auth/Signup';

// const USERS_INFO = gql`
// {
//   allUsers {
//     id
//     first_name
//     last_name
//     email
//     profile_pic
//     username
//     password
//   }
// }
// `

// export default function App() {

//   let { data } = useQuery(USERS_INFO)

//   return (
//     <div>
//       {data && (
//         <>
//           {data.allUsers.map(user => (
//             <Profile key={user.id} user={user}/>
//           ))}
//         </>
//       )}
//     </div>
//   )
// }

import React, { Component } from 'react';
import Profile from './Profile';
import Login from './Auth/Login';

class App extends Component {
  render() {
    return <Login />;
  }
}

export default App;
