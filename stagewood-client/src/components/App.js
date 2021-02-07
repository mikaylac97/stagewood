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

import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useQuery, gql, graphql } from '@apollo/client';
import ProtectedRoute from './ProtectedRoute/index';
import Profile from './Profile';
import Login from './Auth/Login';
import Footer from './Footer';



function App(props) {

  const [userState, setUserState] = useState({
    currentUserId: []
  })

  function updateUser (userId) {
    setUserState({ currentUserId: userId })
}
  
  // console.log(props);
  
    return (
      <div >
      <BrowserRouter>
      <div>
        <Switch>
          <Route 
            path="/"
            render={(props) => <Login userId={userState.currentUserId} onUserChange={(user) => updateUser(user)} {...props} /> } 
          />
          <Route 
            path="/profile"
            render={(props) => <Profile userId={userState.currentUserId} onUserChange={() => updateUser()} {...props} />}
           />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
    )
  
}

export default App;

