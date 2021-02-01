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
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Profile from './Profile';
import Login from './Auth/Login';

class App extends Component {
  render() {
    return (
      <div className="center w85">
      <BrowserRouter>
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
