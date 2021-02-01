import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../../constants';


const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $first_name: String!
        $last_name: String!
        $email: String!
        $profile_pic: String!
        $username: String!
        $password: String!
    ) {
        signup (
            first_name: $first_name
            last_name: $last_name
            email: $email
            profile_pic: $profile_pic
            username: $username
            password: $password
        ) {
            token
        }
    }
`

const LOGIN_MUTATION = gql`
    mutation LoginMutation(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ) {
            token
        }
    }
`

export default function Login() {

    const history = useHistory();
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: ''
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
            history.push('/');
        }
    })

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
            first_name: formState.first_name,
            last_name: formState.last_name,
            email: formState.email,
            profile_pic: formState.profile_pic,
            username: formState.username,
            password: formState.password
        },
        onCompleted: ({ signup }) => {
            localStorage.setItem(AUTH_TOKEN, signup.token);
            history.push('/');
        }
    })

    return (
        <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value
              })
            }
            type="text"
            placeholder="Your username"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
        <div className="flex mt3">
            <button
                className="pointer mr2 button"
                onClick={formState.login ? login : signup}
            >
                {formState.login ? 'login' : 'create account'}
            </button>
            <button
                className="pointer button"
                onClick={(e) =>
                setFormState({
                    ...formState,
                    login: !formState.login
                })
                }
            >
                {formState.login
                ? 'need to create an account?'
                : 'already have an account?'}
            </button>
        </div>
    </div>
    )
}
