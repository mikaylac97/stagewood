import { useQuery, gql } from '@apollo/client';
import { parse } from 'graphql';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';



const GET_USER = gql`
    query FindUserById ($id: ID!){
        findUser(id: $id) {
            first_name
            last_name
            email
            profile_pic
            username
        }
    }
  `



export default function Profile(props) {

console.log(props)
const userIdInt = parseInt(props.userId)
const { loading, error, data } = useQuery(GET_USER, {
    variables: {
        id: userIdInt
    }
});

const logout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    props.onUserChange(null)
    props.history.push('/');
}

console.log(data)

if (loading) return('Loading...')
if (error) return ('Error!', error.message)
console.log(data)
    return (
        <div>
            First Name: {data?.findUser?.first_name}
            Last Name: {data?.findUser?.last_name}
            <button onClick={event => logout(event)}>Logout</button>
        </div>
    )
}
